import logo from './logo.svg';
import './App.css';
import{useSelector, useDispatch} from 'react-redux';
import Expenses from './Expenses';
import AddExpenses from './AddExpenses';
// import {useNavigate} from 'react-router'

const updateBudget = () =>{
  console.log("In update budget");
  window.open("https://mars.nasa.gov/")
}
function App() {

  require('react-dom');
  window.React2 = require('react');
  console.log("Checking to see if using on version of react", window.React1 === window.React2);
  
 // let dispatch = useDispatch();
  // const budget = useSelector(state=>state.budget);
  const budget = 5000;
  const spent = 0;
  const remaining = budget - spent;
  console.log("Budget: ", {budget})

  // let navigate = useNavigate();
  return (
    <div className="App">
      <h1>My Budget Planner</h1>
      <div className="main-container">
        
        <h3 className= "budget">Budget: ${budget}  <button className = "updateBudget" type="button" onClick={updateBudget}>Update</button></h3>
        {/* <button variant="outlined">Open Simple Dialog</button> */}
        <h3 className= "remaining">Remaining: ${remaining}</h3>
        <h3 className= "spent">Spent: ${spent} </h3>
    </div>
    <Expenses/>
    <AddExpenses/>
    </div>
  );
}

export default App;
