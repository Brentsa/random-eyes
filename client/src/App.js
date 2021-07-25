import './App.css';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Product from './pages/Product';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Login from './pages/Login';
import Signup from './pages/Signup';

const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Header/>
          <main>
            <Switch>
              <Route exact path= '/' component={Home}/> 
              <Route exact path= '/products/:productid' component={Product}/>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />

            </Switch> 

          </main>
          

        
        </div>

      </Router>
    </ApolloProvider>
  
  );
}



export default App;
