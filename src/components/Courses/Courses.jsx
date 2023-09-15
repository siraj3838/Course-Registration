import { useEffect, useState } from "react";
import Course from "./Course/Course";
const Courses = ({selectBtn}) => {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('courseimage.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="lg:w-3/4 w-2/2 sm:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    courses.map((singleCours, idx) => <Course key={idx} singleCours={singleCours} selectBtn={selectBtn}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;