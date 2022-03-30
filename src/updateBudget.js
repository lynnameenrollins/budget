import React from 'react';
import {useNavigate} from 'react-router';



function updateBudget() {
    let navigate = useNavigate();
    
  
    function backtoBudgetSummary(){
        navigate('/home')
    }  
    
    return (
        
        <div style = {{backgroundColor:"#2e783c"}}>
            
            <h1>Please update the budget amount below:</h1>
            <br></br>
            <br></br>
            <label>New Budget: 
            <input type="number"></input>
            </label>
            <button onClick={backtoBudgetSummary}> Back to BudgetSummary</button>
            <br></br>
            <br></br>
        </div>
    );
}

export default updateBudget;
