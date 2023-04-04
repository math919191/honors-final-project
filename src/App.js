import 'bootstrap/dist/css/bootstrap.min.css';
import questions from './DataQuestions.json';
import { Quiz } from './Components/Quiz/Quiz';

import {Results} from './Components/ResultPage/Results'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { Menu } from './Components/Menu';
import { About } from './Components/About';
import { NotFound } from './Components/NotFound';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/play' element={<Results/>} />
        <Route path='/quiz' element={<Quiz 
          questions={questions}
          onEndOfQuiz={(userAnswers) => console.log("end", userAnswers)}
          />} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>

      {/* <Quiz 
      questions={questions}
      onEndOfQuiz={(userAnswers) => console.log("end", userAnswers)}
      /> */}
    </div>
  );
}

export default App;
