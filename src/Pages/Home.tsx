import { useHistory } from 'react-router-dom';
import ilustrationImg from '../images/illustration.png';

import logoImg from '../images/logo.png';
import google from '../images/googleIcon.png';
import '../Styles/auth.scss';


import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth()

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new');
  }

  return(
    <div id="Page-auth">
      <aside>
        <img src={ilustrationImg} alt="" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>tire as duvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className='main-content'> 
          <img src={logoImg} alt="" />
          <form>
            
            <button onClick={handleCreateRoom} className='create-room'>
              <img src={google} />
              crie sua sala com o google
            </button>
            <div className='separador'>ou entre em uma sala</div>
            <input
              type="text"
              placeholder='Digite o código da sala'
            />
          </form>
          

          <Button type='submit'>
            entrar na sala
          </Button>
        </div>
      </main>
    </div>
  )
}
export default Home