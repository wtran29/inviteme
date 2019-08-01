import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BaseRouter from './routes';
import 'antd/dist/antd.css';

import { connect } from 'react-redux';
import CustomLayout from './containers/Layout';
import EventList from './containers/EventListView';
// import Event from './Component/Event/index';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <CustomLayout {...this.props}>
                        <BaseRouter />
                    </CustomLayout>
                </Router>
            </div>
        );
    }
}

// mapStateToProps = state => {
//    return {
//        isAuthenticated: state.token !== null
//    }
//}

//export default connect(mapStateToProps)(App);

export default App;