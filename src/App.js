import Connexion from './Connexion';
import Password from './Password';
import Compte from './Compte';
import Réinitialiser from './Réinitialiser';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

          <Routes>

              <Route index element={<Connexion/>}/>
              <Route path="/connexion" element={<Connexion/>}/>
              <Route path="/password" element={<Password/>}/>
              <Route path="/compte" element={<Compte/>}/>
              <Route path="/réinitialiser" element={<Réinitialiser/>}/>

          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
