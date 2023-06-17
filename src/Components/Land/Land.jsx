import React, { useEffect, useState } from 'react'
import Header from '../LandingPage/Header';
import Hero from '../LandingPage/Hero';
import Recent from '../LandingPage/Recent';
import Counter from '../LandingPage/Counter';
import Testimonial from '../LandingPage/Testimonial';
import Partner from '../LandingPage/Partner';
import Footer from '../LandingPage/Footer';
import Axios from 'axios';
import './Land.css';

function Land() {
    const [rec, setRecent] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/api/recent').then(function (res) {
            setRecent(res.data);
            console.log(res.data);
        })
        function reveal2() {
            var reveals = document.querySelectorAll(".reveal2");

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        }

        window.addEventListener("scroll", reveal2);
    }, [])
    return (
        <div>
            <div className='App'><Header /></div>
            <div className='hero'><Hero /></div>
            <div className="container reveal2" >
                <h1>Recent Listing</h1>
                <div className='row' style={{ display: 'flex', flexDirection: 'row' }} >
                    {rec.slice(0, 6).map((val, key) => {
                        return (<Recent key={key} style={{ width: "200px" }} title={val.PropertyType} address={val.PropertyAddress} image={val.ImageName} />)
                    })}
                </div>
                <button class="made_by">View Properties</button>
            </div>
            <Counter />
            <Testimonial />
            <Partner />
            <Footer />
        </div>
    )
}

export default Land