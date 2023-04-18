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
                <p class="indiv">Get ready to test your knowledge and challenge your preconceptions with our trivia website! <br/><br/>

Our platform is dedicated to exploring the fascinating world of cultures and stereotypes through fun and engaging quizzes.

<br/><br/>But we don't just want to test your knowledge – we want to help you learn something new and exciting along the way. So whether you're a seasoned globetrotter or a curious newbie, our trivia website is the perfect place to expand your cultural horizons.

<br/><br/>So what are you waiting for? Grab a friend or two, pour yourself a drink, and let's get quizzing!
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