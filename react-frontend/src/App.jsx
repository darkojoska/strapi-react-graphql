import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Header";
import Category from "./pages/Category";
import Home from "./pages/Home";
import ReviewDetails from "./pages/ReviewDetails";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


// apolo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details/:id" component={ReviewDetails} />
            <Route path="/category/:id" component={Category} />
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
