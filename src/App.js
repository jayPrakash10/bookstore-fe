import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Nav from './component/nav_components/nav';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import { themeContext, themes } from './js/theme';

function App() {
  const [theme,setTheme]=useState(themes.light)
  function set(){
    let app = document.getElementsByClassName('App')[0];
      if(app.style.backgroundColor=='')
        app.style.backgroundColor='#343a40';
      else
        app.style.backgroundColor=''
    console.log(app.style);
    setTheme(theme===themes.dark ? themes.light : themes.dark)
  }
  return (
    <Router>
      <themeContext.Provider value={theme}>
        <div className="App">
          <Header changeTheme={set}/>
          <Nav />
          <Footer />
        </div>
      </themeContext.Provider>
    </Router>
  );
}

export default App;