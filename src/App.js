import './App.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';
import ParentJoin from './components/Join/ParentJoin';
import ParentSetPasswd from './components/Join/ParentSetPasswd';
import ParentFinish from './components/Join/ParentFinish';
import ParentFindPasswd from './components/ParentFindPasswd';
import Login from './components/login/Login';
import MyPage from './components/login/MainPage';

function App() {

  return (
    <RecoilRoot>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* 학부모용 */}
            <Route path='/' element={<Main />} />
            <Route path='/parent/login' element={<Login />} />
            <Route path='/parent/home' element={<MyPage />} />
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
