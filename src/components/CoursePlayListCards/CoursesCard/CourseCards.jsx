import { useEffect, useState } from "react";
import SingleCard from "./SingleCard/SingleCard";

const CourseCards = () => {
    const [courseCards, setCourseCards] = useState([])
    useEffect(() => { 
        fetch('courseimage.json')
        .then(res => res.json())
        .then(data => setCourseCards(data))
    }, [])
    return (
        <div>
            {
                courseCards.map((singleBox, idx)=> <SingleCard singleBox={singleBox}></SingleCard>)
            }
        </div>
    );
};

export default CourseCards;