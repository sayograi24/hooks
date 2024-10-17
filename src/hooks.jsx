import { useState } from "react";

function Hooks(){
    
    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(0)

    const updateName = () =>{
       setName("hello");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const DecrementAge = () => {
        setAge(age - 1);
    }

    return(
    <>
        <div>
            <p>
                Name: {name}
                <button onClick={updateName}>Set Name</button>
            </p>

            <p>
                age: {age}
                <button onClick={incrementAge}>age </button>
                <button onClick={DecrementAge}>age-</button>
            </p>
        </div>
    </>
    )
}
export default Hooks