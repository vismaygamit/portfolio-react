import React from 'react';
import './App.css';
import Home from './pages/home';
import MainHeader from './shared/components/Navigation/MainHeader';
import MainFooter from './shared/components/Navigation/MainFooter';
const App=()=> {
  return (
    <div className="App">  
    <MainHeader />
      <Home />  
<MainFooter />
     </div>  
  );
}

export default App;
