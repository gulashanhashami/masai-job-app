import logo from './logo.svg';
import './App.css';
import { AddJob } from './components/AddJob';
import JobListingPage from './components/JobListingPage';

function App() {
  return (
    <div className="App">
    {/* <AddJob /> */}
    <JobListingPage />
    </div>
  );
}

export default App;
