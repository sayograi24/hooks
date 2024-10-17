import {useState} from 'react';

function Hii(){
    const [name, setName] = useState("")
    const [num, setNum] = useState(0)
    const [showPop, setPop] = useState(false)
    
    const returnname = () =>{
        setName('hello');
    }

    const addition = () => {
        setNum(num + 1);
    }

    const substraction = () => {
        setNum(num - 1);
    }

    const togglepopup = () => {
        setPop(!pop)
    }
    return(
    <>
        <div>
            <p>
                Name: {name}
                <br/>
                <button onClick={returnname}>clicke me</button>
            </p>
            <br/>
            <p>
                Add Number: {num}
                <br/>
                <button onClick={addition}>add</button>
                <button onClick={substraction}>substract</button>
            </p>
            <div className='center-algin'>
            <button onClick={togglepopup}>Show Popup</button>
            </div>
            {
                Pop && (
                <>
                    <div className="popup">
                        <div className='popup-inner'>
                            <h2>Popup TItle</h2>
                            <p>Popup content here</p>
                            <button onClick={togglepopup}>CLose Popup</button>
                        </div>
                    </div>
                </>)
            }
       </div>
    </>
    )


}
export default Hii
