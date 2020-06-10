import React , {useState} from 'react';
import Topnav from './Components/TopNav';
import Hero from './Components/Hero';

function App() {
  const [showMenu,setShowMenu] = useState(false);
  return (
    <div>
      <Topnav setShowMenu={setShowMenu} showMenu={showMenu}/>
      <Hero />
    </div>
  );
}

export default App;
