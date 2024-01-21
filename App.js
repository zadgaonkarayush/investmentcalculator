import { useState } from 'react';
import Header from './component/Header.jsx';
import UserInput from './component/UserInput.jsx';
import Results from './component/Results.jsx';
import './App.css';

function App() {
  const[userInput,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,

});
function handleChange(inputIdentifier,newValue){
       setUserInput(prevUserInput =>{
        return{
            ...prevUserInput,
            [inputIdentifier]: +newValue,    //adding + infront of newvalue force the string to covert it into-
         //-number becoz event.target.value get value as a string we want it in number for calcualtion
        };
       });
}
  return (
    <>
    <Header />
    <UserInput onChangeProp={handleChange} userInputProp={userInput} />
    <Results inputProp={userInput}/>
    </>
  );
}

export default App;
