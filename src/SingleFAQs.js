import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa"

const SingleFAQs = (quest) => {
  const {id, question, answer } = quest

  const [showQuest, setShowQuest] = useState(false)

  return (
    <>
      <article className={!id || `card card-${id}`  }>
      <div className='card-heading'>
          <button onClick={()=>{setShowQuest(!showQuest)}}>{showQuest ? <FaMinus /> : <FaPlus />}</button> 
      <h4> {question}</h4>
      </div>
      {showQuest && <p>{answer}</p>}
    </article>
    </>
  )
}

export default SingleFAQs