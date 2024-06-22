import logo from './logo.svg';
import './App.css';
import { SurveyProvider } from './custom/SurveyContext';
import Form from './components/Form'
import { Route, Routes } from 'react-router-dom';
import Survey from './components/Survey';


function App() {
  return (
    <div className="">
       <SurveyProvider>
        <Routes>
          <Route path="/" element={<Form/>}/>
          <Route path='/survey' element={<Survey/>}/>
        </Routes>
        </SurveyProvider>
    </div>
  );
}

export default App;
