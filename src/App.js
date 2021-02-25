import React,{useState} from 'react';
import logo from './camera-icon.svg';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';

import './App.css';

function App() {
  const [value,setValue]=useState("")
  const[results,setResults]=useState([])
  //Use your API access key and put inside under" " 'cliet_id=" "&' in the line below. The given access key has been deleted. 
  const fetchImages=()=>{
    fetch(`https://api.unsplash.com/search/photos?client_id=VIIfm4z4alq9dDWW8l9TSvbSM3IjkqGGRLv7s-ELqok&query=${value}&orientation=squarish&per_page=60`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setResults(data.results)
    })
  }
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
        <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
          <Route component={NoMatch} />
         
      
        </Switch>
      
    <div className="website">
      <img src={logo} height="100" alt="Camera-icon's Logo" />
      <div className="mydiv">
        <span>Search</span>
        <input style={{width:"60%"}}type="text" value={value} onChange={(e)=>setValue(e.target.value)}/> 
        <button onClick={()=>fetchImages()}>Go</button>
      </div>
      <div className="gallery">
        {
          results.map((item)=>{
            return <img  className="item" key={item.id} src ={item.urls.regular} />
          })
        }
        </div>
    </div>
    </Router>
  </React.Fragment>
    
  );
}

export default App;
