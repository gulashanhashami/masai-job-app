import logo from './logo.svg';
import './App.css';
import { AddJob } from './components/AddJob';
import JobListingPage from './components/JobListingPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<JobListingPage />} />
      <Route path='/addjob' element={<AddJob />} />
    </Routes>
    
    </div>
  );
}

export default App;
