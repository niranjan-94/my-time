import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Today from './pages/Today';
import Calendar from './pages/Calender';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Layout from './components/Layout';
// import Layout from './Layout';
// import Today from './Today';
// import Calendar from './Calendar';
// import Reports from './Reports';
// import Settings from './Settings';

const App = () => {
  return (
    <Router>
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={Today} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/reports" component={Reports} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
