import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Your <Route> components go here */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;