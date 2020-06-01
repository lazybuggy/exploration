//import fetch from 'isomorphic-unfetch';
import Scenario from '../components/Scenario';
import Choices from '../components/Choices';
import {useState} from 'react';
import Link from 'next/link'

import '../css/index.css';
import '../fonts/Populationzerobb-ZDXK.otf';
import '../fonts/Scorchedearth-4Ljp.otf';

const Page = (props) => {
  var lastSavedScenario = "5d88d9091c9d4400003c6bce";
  if(props.user){
    lastSavedScenario = props.user.savedPoint;
  }

  const [scenarioId, setScenarioId] = useState(lastSavedScenario);

  async function saveProgress(){
    await fetch("http://localhost:3000/api/users/"+props.user.username, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      savedPoint: scenarioId,
      })
    }).then(async (res) => {
      alert("Progress Successfully saved")
    });
  };

  function signOut(){
    setScenarioId("5d88d9091c9d4400003c6bce");
  };

  return <div className="fill">
    <div className="nav">
    {props.user  
        ? <div className="navContent">
          <h2>Signed in as {props.user.firstName}</h2>
          <Link href="/"><a onClick={signOut}>Sign Out</a></Link>
          <button onClick={saveProgress}>Save Progress</button>
          </div>
        : <div className="navContent">
            <Link href="/login"><a>Log In</a></Link>
            <Link href="/signup"><a>Sign Up</a></Link>
          </div>
       }
    </div>
    {/* <div className="background"/> */}
    <div className="content">
      <div className="inner">
        <Scenario scenarioId={scenarioId} setScenarioId={setScenarioId}  />
      {/* <Choices scenarioId={scenarioId} setScenarioId={setScenarioId} /> */}
      </div>
    </div>
  </div>
};

Page.getInitialProps = ({query}) => {
  var user;
  if(query && query.user){
    user = JSON.parse(query.user);
  }else{
    user= null; 
  }
  return {user};
}

export default Page;

