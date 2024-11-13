import React from 'react'

const Textsection = () => {
  return (
    <section>
    <div className="container">
        <div className="text-section">
            <div className="lg1">
                <h1>Manage All Your Money in One App</h1>
            </div>
            
            <div className="l-content">
                <div>
                    <p>We offer you a new generation of mobile banking. Save, spend & manage money in your pocket.</p>
               </div>
            <div className="buttons">
                <a href="#" className="app-store-btn">
                    <img src="/bilder/appstore.svg" alt="Download on the App Store" />
                </a>
           
                <a href="#" className="google-play-btn">
                    <img src="/bilder/googleplay.svg" alt="Get it on Google Play" />
                </a>
            </div>
                <div className="read-more">
                    <a href="#" className="btn btn-rund btn-white">
                        <i className="fa-light fa-angle-down"></i>       
                    </a>
                    <span>Discover more</span>
                </div>
            </div>
        </div>
        <div className="image-conainer">
            <img className="image-section" src="/bilder/dubbleiphopne.svg" alt="App interface on phone"  />
        </div>
        </div>
    </section>
  )
}

export default Textsection