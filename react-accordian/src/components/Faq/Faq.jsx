import React, {useState} from 'react'


const Faq = ({title, info}) => {
    const [showAnswer, setShowAnswer] = useState(false)
    return (
        <div>
        <header>
            <h4>{title}</h4>
            <button onClick={() => setShowAnswer(!showAnswer)} className='btn' ></button>
        </header>
        {showAnswer && <p>{info}</p>}
        </div>
    )
}

export default Faq
