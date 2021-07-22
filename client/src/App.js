import './App.css';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Product from './pages/Product';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
          <Switch>
            <Route exact path= '/' component={Home}/> 
            <Route exact path= '/products/:productid' component={Product}/>         
          </Switch> 

        </main>
        

      
      </div>
    </Router>
    
  );
}



export default App;
