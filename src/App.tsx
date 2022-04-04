import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from "./Pages/Home";
import { NewRoom } from "./Pages/NewRoom";

import { AuthContextProvider } from './Contexts/AuthContext';
import './Styles/Global.scss';
import { Room } from './Pages/Room';

import { AdiminRoom } from './Pages/adminRoom';


function App() {
 
  return (
  
   <BrowserRouter>

    <Switch>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/NewRoom" exact component={NewRoom} />
        <Route path="/rooms/:id" component={Room} />
        <Route path="/adimin/rooms/:id" component={AdiminRoom} />
      </AuthContextProvider>
    </Switch>
        
   </BrowserRouter>
    
  );
}

export default App;
