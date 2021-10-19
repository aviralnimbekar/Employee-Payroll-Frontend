import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeePayroll from './Components/employee-payroll/EmployeePayroll';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="">
            <EmployeePayroll/>
         </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
