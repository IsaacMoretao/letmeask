import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from "./Pages/Home";

import { NewRoom } from "./Pages/NewRoom";
import { AuthContextProvider } from './Contexts/AuthContext';
import './Styles/Global.scss';

function App() {
 
  return (
  
   <BrowserRouter>

      <AuthContextProvider>
        <Route path="/" exact component={Home}/>
        <Route path="/NewRoom" exact component={NewRoom}/>
      </AuthContextProvider>
        
   </BrowserRouter>
    
  );
}

export default App;
