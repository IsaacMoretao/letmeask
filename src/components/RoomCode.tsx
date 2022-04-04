
import copyImg from '../assets/images/copy.svg';
import '../Styles/RoomCode.scss';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {

  function copyRoomCodeToClipBord() {
    navigator.clipboard.writeText(props.code)
  }


  return(
    <button className="room-code" onClick={copyRoomCodeToClipBord}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span> Sala #{props.code}</span>
    </button>
  )
}