import { useEffect } from "react";

const CourseCards = () => {

    useEffect(() => { 
        fetch('courseimage.json')
        .then(res => res.json())
        .then(data => console(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default CourseCards;