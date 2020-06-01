import fetch from 'isomorphic-unfetch';
import {useState, useEffect} from 'react';
import '../css/scenario.css';
import Choices from '../components/Choices';

const Scenario = (props) => {
  const [scenario, setScenario] = useState({});
  const [background, setBackground] = useState('https://cdn.wallpapersafari.com/24/38/js0uT2.jpg');

  async function fetchData(){
    const res = await fetch("http://localhost:3000/api/scenarios/"+props.scenarioId);
    res.json().then(res => { 
      setScenario(res); 
      if (res.background) { 
        setBackground(res.background) 
      } 
    });
  }

  useEffect(() => {
    fetchData();
  },[scenario]);

  // var text="omg whar is happ";

  // function typeWrite(hello){
  //   // var i = 0;
  //   for(var i=0;i < hello.length;i++){
  //     document.getElementById("yo").innerHTML += hello.charAt(i);
  //     // console.log(i,hello.length,hello.charAt(3));
  //     // i++;
  //     console.log('inc',i);
  //     // setTimeout(typeWrite(hello),1);
  //   }
  // }
  let styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  };
 
  return <div className="scenario">
    <div className="background" style={styles}>
    {/* <div className="background" style={{ background: scenario.background ? `url(${scenario.background})`:null}}/> */}
    <div className="scenarioText">
      <div id="yo"/>
    {scenario.text && scenario.text.split('//').map((paragraph,index)=>{
      return <h1 key={index}>{paragraph}</h1>
      // typeWrite("omgg wjats going on");
      })
    }
    </div>
    {/* <Choices scenarioId={props.scenarioId} setScenarioId={props.setScenarioId} /> */}

    <Choices scenarioId={props.scenarioId} setScenarioId={props.setScenarioId} />
    </div>
  </div>
};

export default Scenario;
