import React from 'react';

import Resume from './pages/Resume';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App: React.FC = () => (
    <Router>
        <Route path="*" component={Resume} />
    </Router>
  )

export default App;
