import React from 'react';
import  './Questions.css'
import Cart from '../Assets/Cart.JPG';

const Questions = () => {
const qList=[{
    image: Cart,
    question:"Question",
    ans:"Headline",
    subject:"Subject Name"

}]
  return (
    <div className='question'>
      {
        qList.map((list,id)=>(
            <div key={id} className="d-flex flex-wrap mt-4">
                <img src={list.image} alt="image"className='list-img mr2' />
                <div>
                    <h4 className='pt-4'>{list.question}</h4>
                    <p>Ans: {list.ans}</p>
                    <p>{list.subject}</p>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Questions
