import './assets/css/index.css';
import {
  Route,
  Routes
} from "react-router-dom";
import Navigation from './components/navigation/Navigation';
import { 
  Home,
  AddPage,
  StartUpPage,
} from './views';
import { Suspense } from 'react';


function App() {
  return (
    <div className="content-wrapper">
      <Suspense>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/add' element={ <AddPage /> } />
          <Route path='/start' element={ <StartUpPage /> } />
        </Routes>
      </Suspense>
      <Navigation />
    </div>
  );
}

export default App;
