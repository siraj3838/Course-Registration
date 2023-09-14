import './App.css'
import CourseCards from './components/CoursePlayListCards/CoursesCard/CourseCards'

function App() {

  return (
    <div className='max-w-screen-xl mx-auto'>
      
      <h1 className='text-center text-4xl mt-12 mb-8 font-bold'>Course Registration</h1>
      <div>
        <CourseCards></CourseCards>
      </div>
    </div>
  )
}

export default App
