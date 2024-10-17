import React, {useState} from 'react';

function Popup(){
    const [showPopup, setShowPopup] = useState(false)

    const togglepopup = () => {
        setShowPopup(!showPopup)
    }

    return(
        <>
        <h1>Simple Pop up</h1>
            <div className='center-algin'>
            <button onClick={togglepopup}>Show Popup</button>
            </div>
            {
                showPopup && (
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
            <nav>
                <ul>
                    <li>heck</li>
                    <li>heck</li>
                    <li>heck</li>
                </ul>
            </nav>
        </>
    )
}
export default Popup