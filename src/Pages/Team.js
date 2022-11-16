import React,{useEffect, useState, useRef } from 'react'

import { PrimaryMember,SecondaryMember } from '../Data/members'
import Navbar from '../Components/Navbar'
import './Team.css'
const Team = () => {
    let [review, setReview] = useState('');
    let [isOpen, setIsOpen] = useState(false);

        let modal = null;
        if(isOpen) {
            modal = (
                <div className='review'>
                        <p style={{whiteSpace: 'pre-line'}}>{review}</p>
                </div>
            )
        }
    const reviewSet = (i) => {
        setReview(i);
        setIsOpen(true);
    }
    let revRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            if(!revRef.current.contains(event.target)) 
            {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })
    return (
        <div>
            <Navbar />
            <div className='card-holder'>
                <div className='cards1'>
                    {PrimaryMember.map((current_elem, ind) => {

                        if(ind==0)
                        {
                            return (
                            <div ref={revRef} key={ind}  onClick={() => reviewSet(current_elem.review)}  className="card1" style={{ gridColumnStart:"1",gridColumnEnd:"-1" }}>
                                <img src={current_elem.pic} alt="pic" />
                                <h1>{current_elem.name}</h1>
                                <h1>{current_elem.company}</h1>
                                <p id="descriptive-note">{current_elem.designation}</p>
                            </div>
                            );
                        }

                        return (
                            <div ref={revRef} key={ind} className="card1" onClick={() => reviewSet(current_elem.review)}>
                                <img src={current_elem.pic} alt="pic" />
                                <h1>{current_elem.name}</h1>
                                <h1>{current_elem.company}</h1>
                                <p id="descriptive-note">{current_elem.designation}</p>
                            </div>)
                    })}
                </div>
                <br/><br/><br/>
                <div className='cards'>
                    {SecondaryMember.map((current_elem, ind) => {
                        return (
                            <div ref={revRef} key={ind} className="card" onClick={() => reviewSet(current_elem.review)}>
                                <img src={current_elem.pic} alt="pic" />
                                <h1>{current_elem.name}</h1>
                                <h1>{current_elem.company}</h1>
                                <p id="descriptive-note">{current_elem.designation}</p>
                            </div>)
                    })}
                </div>
                {modal}
            </div>
        </div>
    )
}

export default Team;