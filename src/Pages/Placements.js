// import React,{useEffect, useState, useRef } from 'react'

// import { CardInfo } from '../Data/placementcard'
// import Navbar from './../Components/Navbar'
// import './placement.css'
// const Placements = () => {
//     let [review, setReview] = useState('');
//     let [isOpen, setIsOpen] = useState(false);

//         let modal = null;
//         if(isOpen) {
//             modal = (
//                 <div class='review'>
//                         <p>{review} </p>
//                 </div>
//             )
//         }
//     const reviewSet = (i) => {
//         setReview(i);
//         setIsOpen(true);
//     }
//     let revRef = useRef();

//     useEffect(() => {
//         let handler = (event) => {
//             if(!revRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         }

//         document.addEventListener("mousedown", handler);

//         return () => {
//             document.removeEventListener("mousedown", handler);
//         }
//     })
//     return (
//         <div>
//             <Navbar />
//             <div class='activity' >
//                 <div class='activities'>
//                     {CardInfo.map((current_elem, ind) => {

//                         if(ind==0)
//                         {
//                             return (
//                             <div ref={revRef} key={ind}  onClick={() => reviewSet(current_elem.review)}  className="container" style={{ gridColumnStart:"1",gridColumnEnd:"-1" }}>
//                                 <img src={current_elem.pic} alt="pic" />
//                                 <h1>{current_elem.name}</h1>
//                                 <p id="description">{current_elem.company}</p>
//                             </div>
//                             );
//                         }


//                         return (
//                             <div ref={revRef} key={ind} className="container" onClick={() => reviewSet(current_elem.review)}>
//                                 <img src={current_elem.pic} alt="pic" />
//                                 <h1>{current_elem.name}</h1>
//                                 <p id="description">{current_elem.company}</p>
//                             </div>)
//                     })}
//                 </div>
//                 {modal}
//             </div>
//         </div>
//     )
// }

// export default Placements;