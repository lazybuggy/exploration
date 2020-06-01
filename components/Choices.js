import fetch from 'isomorphic-unfetch';
import {useState, useEffect} from 'react';
import '../css/choices.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Scenario = (props) => {
  const [choices, setChoices] = useState([]);

  async function fetchData(){
    const res = await fetch("http://localhost:3000/api/choices/"+props.scenarioId);
    res.json().then(res=>setChoices(res));
  }
  
  useEffect(() => {
    fetchData();
  },[choices]);

  return <div className="choicesContainer"> 
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionLeaveTimeout={500}
      transitionEnterTimeout={500}> 
    {choices.map((choice,key) => {
        return (
          <button 
            key={choice._id} 
            className="choice"
            onClick={() => props.setScenarioId(choice.nextScenarioId)}>
            {choice.text}
          </button>
        );
      })
    }
    </ReactCSSTransitionGroup>

  </div>
};

export default Scenario;
