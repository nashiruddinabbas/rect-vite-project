import { useEffect, useState } from "react";

const FetchData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((res) => setData(res));
    });
    return (
        <div className="col-span-3 gird gird-cols-1 lg:gird-cols-3 gap-4 p-4">
            { data.map((item, index) => (
                <div key={index} className="border p-4 rounded-2xl">
                    <h1>{item.name}</h1>
                    <p>{item.email}</p>
                    <p>{item.website}</p>
                </div>
            ))}
        </div>
    );
};

export default FetchData;