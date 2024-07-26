import { useState, useEffect } from "react"


export default function Products() {
    const [glasses, setGlasses] = useState([])

    useEffect(() =>{
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/glasses')
            const json = await response.json()
            setGlasses(json)
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>Products</h1>
            <ul>
                { glasses.map((glasses, index) => (
                    <li key={index} style={{paddingBottom: '25px'}}>
                        <div>{glasses.glasses_name}</div>
                        <div>${glasses.price}</div>
                        <div style={{whiteSpace: 'pre-wrap'}}>{glasses.features}</div>
                        <div style={{whiteSpace: 'pre-wrap'}}>{glasses.specifications}</div>
                    </li>
                ))}
            </ul>

        </div>
    )
}