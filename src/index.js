import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GameScreen from './components/GameScreen'
import reportWebVitals from './reportWebVitals';
import { Route, Link, Switch , BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
    <>
        <Router>
          <Switch>
            <Route exact path ="/" component={App}></Route>
            <Route  path ="/GameScreen" component={GameScreen}></Route>
          </Switch>
        </Router>
    </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
