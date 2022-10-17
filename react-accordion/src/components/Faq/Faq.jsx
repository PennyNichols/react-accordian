import React, {useState} from 'react'


const Faq = ({title, info}) => {
    const [showAnswer, setShowAnswer] = useState(false)
    return (
        <div className='faq-wrapper m-auto shadow p-3 '>
        <header className='d-flex justify-content-between align-items-center'>
            <h4>{title}</h4>
            <button onClick={() => setShowAnswer(!showAnswer)} className='btn ms-5 my-2 p-2 ' >{showAnswer ? '-' : '+'} </button>
        </header>
            {showAnswer && <p className='me-5 pe-5 text-start'>{info}</p>}
        </div>
    )
}

export default Faq
