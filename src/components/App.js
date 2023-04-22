// create your App component here
import {React, useState, useEffect } from "react";

const App = () => {
    const [image, setImage] = useState (null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then((data) => {
            setImage(data.message)
            setLoading(false)
        })
    })
    return ( 
        <div>
            {loading ? (
                <p>Loading</p>
            ) : (
            <img src={image} alt="A Random Dog" />
            )}
        </div>
     );
}
 
export default App;
