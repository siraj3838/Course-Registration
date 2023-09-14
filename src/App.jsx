import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import CoursesList from './components/CoursesList/CoursesList'
import Header from './components/Header/Header'
import Swal from 'sweetalert2'
function App() {
const [cours, setCours] = useState([])
const [time, setTime] = useState(0)
const [prices, setPrices] = useState(0)
const [remaining, setRemaining] = useState(20)
const selectBtn = (singleCours) =>{
  const isHaven = cours.find(oneCours => oneCours.id == singleCours.id)
  let total = singleCours.credit;
  let priceTotal = singleCours.price;
  if(isHaven){
    Swal.fire(
      'Sorry',
      'Already You Select This Course',
      'question'
    )
  } 
  else{
    cours.map((card)=>{
      total += card.credit;
      priceTotal+=card.price;
    })
    const ream = 20 - total;
    if(ream < 0){
      Swal.fire(
        'Sorry',
        'Your Remaining Time Are Finish',
        'question'
      )
    }
    else{

      setCours([...cours, singleCours])
      setTime(total)
      setPrices(priceTotal)
      setRemaining(ream);
    }
  }
}
  return (
    <div className='max-w-screen-xl mx-auto p-5 lg:p-0 sm:p-5'>
      <Header></Header>
      <div className='flex gap-6'>
        <Courses selectBtn={selectBtn}></Courses>
        <CoursesList remaining={remaining} prices={prices} time={time} cours={cours}></CoursesList>
      </div>
    </div>
  )
}

export default App
