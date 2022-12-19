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
import 'antd/dist/reset.css'; 

function App() {
  return (
    <div className="content-wrapper">
      <Suspense
        fallback={ 
          <div className="vh-100 w-100 d-flex justify-content-center align-items-center">Loading...</div>
        }
      >
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
