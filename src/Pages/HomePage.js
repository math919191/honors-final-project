import Button from 'react-bootstrap/Button';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/CSS/homepage.css';

export function HomePage(props){
    return (
        <div class="mainmaindiv">
            <div class="maindiv">
            <h1>World Wide Wisdom!</h1>
            <div class="flex">
                <p class="indiv">Welcome to World Wide Wisdom!<br/>
                    Are you ready to prove how much you    <br/>
                    know about cultures around the world?</p>

                    <Carousel fade>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={"https://www.yaccatravels.com/public/userfiles/Nepali-culture-bel-bibah.png"}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={"https://www.yaccatravels.com/public/userfiles/Nepali-culture-bel-bibah.png"}
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={"https://www.yaccatravels.com/public/userfiles/Nepali-culture-bel-bibah.png"}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={"https://www.yaccatravels.com/public/userfiles/Nepali-culture-bel-bibah.png"}
                            alt="Fourth slide"
                            />
                            <Carousel.Caption>
                            <h3>Fourth slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>

            </div>
            <br/>
            <Button variant="primary" onClick={() => props.nextPageFunction()}>Click here to take the quiz</Button>{' '}
        </div>
        </div>
    )
}