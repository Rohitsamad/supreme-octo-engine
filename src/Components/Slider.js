import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHome, FaTree, FaVideo, FaClock, FaRegStar } from "react-icons/fa";


function Imageslider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
               <div className="card">
                   <div className="card-image">
                       <img src="images/1.jpg" />
                   </div>
                   <div className="detail">
                       <h2>Suraj Kumar <span className="title"><FaClock />&nbsp; Experience: 5 + years</span><span className="title"><FaRegStar />&nbsp; Gym, Yoga, Boxing, Taekwondo, sports Trainer</span></h2>
                       <li><a><FaVideo />&nbsp;&nbsp;Online</a></li>
                       <li><a><FaHome />&nbsp;&nbsp;Home</a></li>
                       <li><a><FaTree />&nbsp;&nbsp;Outdoor</a></li>
                       <div><button className="btn">BOOK</button></div>
                        <h2>₹ 150 / session</h2>
                    </div>
                        
                   
               </div> 
            </div>
            <div className="card-wrapper">
               <div className="card">
                   <div className="card-image">
                       <img src="images/2.jpg" />
                   </div>
                   <div className="detail">
                       <h2>Pushottam Das <span className="title"><FaClock />&nbsp; Experience: 3 + years</span><span className="title"><FaRegStar />&nbsp; Gym, Cardio, Boxing, HIIT</span></h2>
                       <li><a><FaHome />&nbsp;&nbsp;Home</a></li>
                       <li><a><FaTree />&nbsp;&nbsp;Outdoor</a></li>
                       <div><button className="btn">BOOK</button></div>
                        <h2>₹ 300 / session</h2>
                    </div>
                        
                   
               </div> 
            </div>
            <div className="card-wrapper">
               <div className="card">
                   <div className="card-image">
                       <img src="images/8.jpg" />
                   </div>
                   <div className="detail">
                       <h2>Ritu Jharia <span className="title"><FaClock />&nbsp; Experience: 5 + years</span><span className="title"><FaRegStar />&nbsp; Zumba, Aerobics, Cardio, Yoga, Dance</span></h2>
                       <li><a><FaVideo />&nbsp;&nbsp;Online</a></li>
                       <li><a><FaHome />&nbsp;&nbsp;Home</a></li>
                       <div><button className="btn">BOOK</button></div>
                        <h2>₹ 300 / session</h2>
                    </div>
                        
                   
               </div> 
            </div>
            <div className="card-wrapper">
               <div className="card">
                   <div className="card-image">
                       <img src="images/7.jpg" />
                   </div>
                   <div className="detail">
                       <h2>Jatin <span className="title"><FaClock />&nbsp; Experience: 5 + years</span><span className="title"><FaRegStar />&nbsp; Gym Trainer, Yoga</span></h2>
                       <li><a><FaVideo />&nbsp;&nbsp;Online</a></li>
                       <li><a><FaHome />&nbsp;&nbsp;Home</a></li>
                       <li><a><FaTree />&nbsp;&nbsp;Outdoor</a></li>
                       <div><button className="btn">BOOK</button></div>
                        <h2>₹ 500 / session</h2>
                    </div>
                        
                   
               </div> 
            </div>
            <div className="card-wrapper">
               <div className="card">
                   <div className="card-image">
                       <img src="images/6.jpg" />
                   </div>
                   <div className="detail">
                       <h2>Sagar Pratim <span className="title"><FaClock />&nbsp; Experience: 7 + years</span><span className="title"><FaRegStar />&nbsp; Gym, Mixed Martial Arts, Boxing, HIIT, Physiotherapist</span></h2>
                       <li><a><FaVideo />&nbsp;&nbsp;Online</a></li>
                       <li><a><FaHome />&nbsp;&nbsp;Home</a></li>
                       <li><a><FaTree />&nbsp;&nbsp;Outdoor</a></li>
                       <div><button className="btn">BOOK</button></div>
                        <h2>₹ 1000 / session</h2>
                    </div>
                        
                   
               </div> 
            </div>
            
        </Slider>
    )
}

export default Imageslider