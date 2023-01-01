import './assets/css/index.css';
import {
  Route,
  Routes
} from "react-router-dom";
import {
  Loading,
  Navigation,
} from './components';
import React, { Suspense } from 'react';
import 'antd/dist/reset.css';

const Home = React.lazy(() => import('./views/app-views/Home/Home'));
const AddPage = React.lazy(() => import('./views/app-views/AddPage/AddPage'));
const StartPage = React.lazy(() => import('./views/app-views/start-up-page/StartUpPage'));

function App() {
  return (
    <div className="content-wrapper">
      <Suspense
        fallback={
          <div className="vh-100 w-100 d-flex justify-content-center align-items-center">Loading...</div>
        }
      >
        <Routes>
          <Route
            index
            exact
            path='/'
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            exact
            path='/add'
            element={
              <Suspense fallback={<Loading />}>
                <AddPage />
              </Suspense>
            }
          />
          <Route
            exact
            path='/start'
            element={
              <Suspense fallback={<Loading />}>
                <StartPage />
              </Suspense>
            }
          />
          <Route
            exact
            path='/'
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
        </Routes>
      </Suspense>
      <Navigation />
    </div>
  );
}

export default App;
