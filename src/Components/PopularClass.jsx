import { useEffect, useState } from "react";

const PopularClass = () => {
    const [musicClasses, setMusicClasses] = useState([]);

    useEffect(() => {
        fetch('/Classes.json')
            .then(response => response.json())
            .then(data => {
                // Sort the classes in descending order based on the number of students
                const sortedClasses = data.sort((a, b) => b.Student - a.Student);
                // Slice the sorted array to get the first six classes
                const firstSixClasses = sortedClasses.slice(0, 6);
                setMusicClasses(firstSixClasses);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            <p>education</p>
            <p>Popular Classes</p>
            <div className="grid grid-cols-3 gap-14">
                {musicClasses.map(classItem => (
                    <Card key={classItem.Id} classItem={classItem}>
                        {/* <h2>{classItem.Name}</h2>
                    <p>Students: {classItem.Student}</p> */}
                    </Card>
                ))}
            </div>
        </div>


    );
};

export default PopularClass;


function Card({ classItem }) {

    return (
        <div className="card w-96 bg-base-100">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{classItem.Name}</h2>
                <p>Time: {classItem.Time}</p>
                <p>Days: {classItem.Day}</p>
                <p>$ {classItem.Price} /monthly</p>

            </div>
        </div>


    )
}
