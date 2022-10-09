import './index.scss';
import {useState} from "react";
import {Modal} from "./components/Modal";

function App() {
  const [open, setOpen] = useState<boolean>(false)

  const onClickOpen = () => {
    setOpen(true)
  }

  const onClickClose = () => {
    setOpen(false)
  }


  return (
    <div className="App">
      <button className="open-modal-btn" onClick={onClickOpen}>✨ Открыть окно</button>
      <Modal open={open} onClickClose={onClickClose}>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt={'img'}/>
        <h3>Modal Window</h3>
      </Modal>

    </div>
  );
}

export default App;
