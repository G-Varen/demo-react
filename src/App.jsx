import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'
import MyForm from './components/myform'
import Product from './components/product'
import Search from './components/search'
import Modal from './components/modal'
import ProgressBar from './components/progress-bar'
import MyEffect from './components/my-effect'
import RandomImg from './components/random_img'



function App() {
  const [toggleIcon, setToggleIcon] = useState("🌞");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [darkToogle, setDarkToogle] = useState({ backgroundColor: 'gray' });

  const toogle = () => {
    setToggleIcon(toggleIcon == "🌞" ? "🌚" : "🌞");
    setIsDarkMode(!isDarkMode);
  }


  return (
    <div className={`${isDarkMode && "dark-mode"}`}>
      {/* <div className='toggle-bar' style={isDarkMode ? { backgroundColor: '#655280', justifyContent: "end" } : {}}>

        <span className='toogle-circle'
          style={isDarkMode ? { backgroundColor: '#eee0ff', transform: "translateX(230%)" } : {}}
          onClick={() => toogle()}>
          {toggleIcon}
        </span>

      </div> */}

      {/* <Modal/> */}
      {/* <Search /> */}
      {/* <Product/> */}
      {/* <ProgressBar/> */}
      {/* <MyEffect/> */}
      <RandomImg/>
    </div>
  )
}

export default App
