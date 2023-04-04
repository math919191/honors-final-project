import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import questions from './DataQuestions.json';
import answers from './CorrectAnswers.json';

import { Quiz } from './Components/Quiz/Quiz';

import {Results} from './Components/ResultPage/Results'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { Menu } from './Components/Menu';
import { About } from './Components/About';
import { NotFound } from './Components/NotFound';
import { Home } from './Components/Home';
import {Footer} from './Components/Footer';


function App() {

  function endQuiz(userAnswers){
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers))
    //this.props.router.push('/results')
//    browserHistory.push('/results');


  }

  return (
    <div className="App">
      
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/results' element={
        <Results
        correctResponses={answers.correctAnswers}
        />} />
        <Route path='/quiz' element={<Quiz 
          questions={questions}
          onEndOfQuiz={(userAnswers) => endQuiz(userAnswers)}
          />} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>

      {/* <Quiz 
      questions={questions}
      onEndOfQuiz={(userAnswers) => console.log("end", userAnswers)}
      /> */}
      <Footer />
    </div>
  );
}

export default App;
