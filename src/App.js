import './App.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';
import ParentJoin from './components/Join/ParentJoin';
import ParentSetPasswd from './components/Join/ParentSetPasswd';
import ParentFinish from './components/Join/ParentFinish';
import ParentFindPasswd from './components/ParentFindPasswd';
import PrivateRoute from './components/login/PrivateRoute';
import Home from './components/Home';
import SignIn from './components/login/SignIn';
import Login from './components/Login';
import Terms from './components/Terms';

function App() {
  const token = sessionStorage.getItem("Authorization");

  return (
    <RecoilRoot>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* 학부모용 */}
            <Route path='/' element={<Main />} />
            <Route path='/parent/login' element={<Login />} />
            <Route path='parent/home' element={<Home />} />
            <Route path='parent/terms' element={<Terms />} />

            {/* <Route path='parent/home' element={<PrivateRoute component={<Home />} authenticated={token} />} /> */}
            <Route element={<Layout />}>
              <Route path='/parent/join' element={<ParentJoin />} />
              <Route path='/parent/join/password' element={<ParentSetPasswd />} />
              <Route path='/parent/join/finish' element={<ParentFinish />} />
              <Route path='/parent/findpw' element={<ParentFindPasswd />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
