import React, {useState} from 'react'


const Faq = ({title, info}) => {
    const [showAnswer, setShowAnswer] = useState(false)
    return (
        <div className='faq-wrapper'>
        <header className='d-flex justify-content-between align-items-center'>
            <h4>{title}</h4>
            <button onClick={() => setShowAnswer(!showAnswer)} className='btn mx-5 my-2 p-2 border' >+</button>
        </header>
            {showAnswer && <p className='me-5 pe-5 text-start'>{info}</p>}
        </div>
    )
}

export default Faq
