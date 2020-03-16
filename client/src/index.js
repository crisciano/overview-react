import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Components/Home/Home'
import Admin from './Components/Admin/Admin'
import Theme from './Theme'

import { styles } from './styles'

import  {
    BrowserRouter as Router, 
    Switch, 
    Route,
    // Link
} from 'react-router-dom'
import Menu from './Components/Menu/Menu';

ReactDOM.render(
    <Theme.Provider value={styles} >
        <Router>
            <Menu />
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/admin" component={Admin} />
            </Switch>
        </Router>
    </Theme.Provider> 
    , document.getElementById('root'));
