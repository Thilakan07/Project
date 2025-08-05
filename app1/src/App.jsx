
import MyComponent from './compenents/MyComponent.jsx'

import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './compenents/Login.jsx';
import News from './compenents/News.jsx';


      function App() {
  return (
    <div className="App">
      <MyComponent />
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/news' element={<News/>}/>
      </Routes>
    </div>
  );
}

  
 

export default App
