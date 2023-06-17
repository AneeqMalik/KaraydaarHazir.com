import React from 'react';
import { Carousel } from 'react-bootstrap';

function ListingCarousel(props) {
    return (
        <div>
            <Carousel style={{ height: '400px' }}>
                    <Carousel.Item>
                        <img style={{ height: '400px' }}
                            className="d-block w-100"
                            src={require('../../assests/has.jpeg')}
                            alt=""
                        />
                        <Carousel.Caption>
                            <h3>House</h3>
                            <p>Nice and Luxurious</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ height: '400px' }}
                            className="d-block w-100"
                            src={require('../../assests/4.jpeg')}
                            alt=""
                        />
                        <Carousel.Caption>
                            <h3>House</h3>
                            <p>Spacious Home</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ height: '400px' }}
                            className="d-block w-100"
                            src={require('../../assests/6.jpeg')}
                            alt=""
                        />
                        <Carousel.Caption>
                            <h3>House</h3>
                            <p>Beautiful Home</p>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
        </div>

    )
}

export default ListingCarousel