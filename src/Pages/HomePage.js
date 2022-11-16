import React from 'react'
import './HomePage.css'
import { Activities } from '../Data/activities'
import Whoarewe from '../Assets/Whoarewe'
import TeslaSVG from '../Assets/TeslaSVG'
import EESAFolio from '../Assets/EESAFolio'
import BlogSVG from '../Assets/BlogSVG'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
function HomePage() {

    return (
        <div>
            <Navbar/>
            <div className="body">
                <TeslaSVG />
            </div>
            <div className="activity">
                <h1 className="text">Activities</h1>
                <div className="activities">
                    {Activities.map((i, j) => {
                        return (
                            <div key={j} className="container">
                                <h1>{i.title}</h1>
                                <p id="description">{i.description}</p>
                            </div>)
                    })}
                </div>
            </div>
            <div className="timeline">
                <br /><br />
                <div className="about">
                    <Whoarewe />
                    <div id="text">
                        <h1 className="text">Who are we?</h1>
                        <p className="text">TESLA (Technical Electrical Society For Learning And Application) is a community that encourages and supports Electrical Engineering students. It  stands with an aim to
                            provide a platform for Electrical Engineering students to socialise with their peers and to encourage a feeling of community in the electrical engineering stream.</p>
                    </div>
                </div>
                <br /><br />
                <div className="blog">
                    <div id="text">
                        <h1>Blog</h1>
                        <p>Blog related to alumuni and professors experience. </p>
                        <form className="commingsoon">
                            <button>Coming Soon</button>
                        </form>
                    </div>
                  <BlogSVG/>
                  </div>
                <br /><br />
                <div className="about">
                    <EESAFolio/>
                    <div id="text">
                        <h1 className="text">TESLA Folio</h1>
                        <p className="text">Portfolio of Electrical Engineers(NITP) at one place.</p>
                        <form className="commingsoon" action="/eesa" method="post">
                            <button>Visit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default HomePage
