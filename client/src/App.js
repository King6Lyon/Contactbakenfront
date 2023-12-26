import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './compartiments/homepage/HomePage'
import Ajout from './compartiments/ajout/Ajout'
import ListeClient from './compartiments/affichage/ListeClient'
import Update from './compartiments/update/Update'
import Dashbord from './compartiments/dashbord/Dashbord';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/ajoutClient' element={<Ajout/>}/>
        <Route path='/dashbord' element={<Dashbord/>}/>
        <Route path='/afficheClient' element={<ListeClient/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
