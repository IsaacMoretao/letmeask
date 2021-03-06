import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';
import { Link, useHistory } from 'react-router-dom';

import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import '../Styles/auth.scss';


export function NewRoom(){
  const { user } = useAuth()
  const history = useHistory()
  const [NewRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    console.log(NewRoom)

    if (NewRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: NewRoom,
      author: user?.id

    })

    history.push(`/rooms/${firebaseRoom.key}`)

  }

  return(
    <div id="Page-auth">
      <aside>
        <img src={ilustrationImg} alt="Ilustração" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>tire as duvidas da sua audiência em tempo-real</p>

      </aside>

      <main>

        <div className='main-content'> 
          <img src={logoImg} alt="Letmeask" />
           <h2>Criar uma nova sala</h2>
           <form onSubmit={handleCreateRoom}>
             <input
              type="text"
              placeholder='Nome da sala'
              onChange={event => setNewRoom(event.target.value)}
              value={NewRoom}
             />
 
             <Button type='submit'>
               Criar sala
             </Button>
           </form>
          
          <p>
            Quer entrar em uma sala existente? <Link to="/">Click aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
export default NewRoom;