import './App.css';
import Nav from './components/nav'
import Web from './components/web'
import Twitter from './components/twitter'
import About from './components/about'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { isCompositeComponent } from 'react-dom/test-utils';
import NLP from './components/nlp';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/nlp" component={NLP}/>
        <Route path="/web" component={Web}/>
        <Route path="/sentiment" component={Twitter}/>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
  <div>
    <h1>Sentiment Analyis Engine</h1>
  </div>
  );
};

export default App;
