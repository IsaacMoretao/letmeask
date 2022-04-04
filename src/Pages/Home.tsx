import { useHistory } from 'react-router-dom';
import ilustrationImg from '../assets/images/illustration.png';
import { database } from '../services/firebase'

import logoImg from '../assets/images/logo.png';
import google from '../assets/images/googleIcon.png';
import '../Styles/auth.scss';


import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { FormEvent, useState } from 'react';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new');
  }
  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {

      alert('Room does not Exists.');
      return;

    }

    history.push(`/rooms${roomCode}`)

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
          <form onSubmit={handleJoinRoom}>
            
            <button onClick={handleCreateRoom} className='create-room'>
              <img src={google} />
              crie sua sala com o google
            </button>
            <div className='separador' >ou entre em uma sala</div>
            <input
              type="text"
              placeholder='Digite o código da sala'
              onChange={event => setRoomCode (event.target.value)}
              value={roomCode}

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