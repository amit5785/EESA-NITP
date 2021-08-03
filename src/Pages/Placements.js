import React,{useEffect, useState, useRef } from 'react'

import { CardInfo } from '../Data/placementcard'
import Navbar from './../Components/Navbar'

const Placements = () => {
    let [review, setReview] = useState('');
    let [isOpen, setIsOpen] = useState(false);

        let modal = null;
        if(isOpen) {
            modal = (
                <div class='review'>
                        <p>{review} </p>
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
            if(!revRef.current.contains(event.target)) {
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
            <div class='activity' >
                <div class='activities'>
                    {CardInfo.map((i, j) => {
                        return (
                            <div ref={revRef} key={j} className="container" onClick={() => reviewSet(i.review)}>
                                <img src={i.pic} alt="pic" />
                                <h1>{i.name}</h1>
                                <p id="description">{i.company}</p>
                            </div>)
                    })}
                </div>
                {modal}
            </div>
        </div>
    )
}

export default Placements;