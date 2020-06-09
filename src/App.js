import React , {useState} from 'react';
import Topnav from './Components/TopNav';

function App() {
  const [showMenu,setShowMenu] = useState(false);
  return (
    <div>
      <Topnav setShowMenu={setShowMenu} showMenu={showMenu}/>
    </div>
  );
}

export default App;
