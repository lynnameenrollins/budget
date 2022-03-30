import logo from './logo.svg';
import './App.css';
import{useSelector, useDispatch} from 'react-redux';

function App() {

  require('react-dom');
  window.React2 = require('react');
  console.log("Checking to see if using on version of react", window.React1 === window.React2);
  
  let dispatch = useDispatch();
  const budget = useSelector(state=>state.budget);
  console.log("Budget: ", {budget})
  return (
    <div className="App">
      <h1>My Budget Planner</h1>
      <div className="main-container">
        {/* <h3 className= "budget">Budget: ${budget}  <button className = "updateBudget" type="button">Update</button></h3> */}
        <h3 className= "remaining">Remaining: $Amount Remaining </h3>
        <h3 className= "spent">Spent: $Amount Spent </h3>
    </div>
    </div>
  );
}

export default App;
