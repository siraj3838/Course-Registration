import { useEffect, useState } from "react";
import SingleCard from "./SingleCard/SingleCard";
import CourseBoxs from "../../CourseDetailsBox/CourseBoxs";

const CourseCards = () => {
    const [courseCards, setCourseCards] = useState([])
    useEffect(() => {
        fetch('courseimage.json')
            .then(res => res.json())
            .then(data => setCourseCards(data))
    }, [])
    return (
        <div className="flex gap-6 mb-10">
            <div className="w-3/4 grid grid-cols-3 gap-6">
                {
                    courseCards.map((singleBox, idx) => <SingleCard singleBox={singleBox}></SingleCard>)
                }
            </div>
            <div className="w-1/4">
                <CourseBoxs></CourseBoxs>
            </div>
        </div>
    );
};

export default CourseCards;