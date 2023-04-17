import Button from 'react-bootstrap/Button';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/CSS/homepage.css';

export function HomePage(props){
    return (
        <div class="mainmaindiv">
            <div class="maindiv">
            <h1 class="maintitle">World Wide Wisdom!</h1>
            <div class="flex">
                <p class="indiv">Welcome to World Wide Wisdom!
                    Are you ready to prove how much you
                    know about cultures around the world?
                    you think you know and how much you actually do!
                    </p>

                    <Carousel fade>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={"https://cdn.wallpapersafari.com/90/37/6lgX4V.jpeg"}
                            alt="Nepal"
                            />
                            <Carousel.Caption>
                            <h3>Nepal</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={"https://cdn.wallpapersafari.com/6/79/ktpAxI.jpg"}
                            alt="Peru"
                            />
                            <Carousel.Caption>
                            <h3>Peru</h3>
                            </Carousel.Caption>

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={"https://www.eomap.com/wp-content/uploads/2018/12/Tonga_1920x1080.png"}
                            alt="Tonga"
                            />
                            <Carousel.Caption>
                            <h3>Tonga</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={"https://cdn.wallpapersafari.com/80/28/6w1zCZ.jpg"}
                            alt="South Africa"
                            />
                            <Carousel.Caption>
                            <h3>South Africa</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>

            </div>
            <br/>
            <div class="centerbutton">
                <Button variant="primary text-center" onClick={() => props.nextPageFunction()}>Click here to take the quiz</Button>{' '}
            </div>
        </div>
        </div>
    )
}