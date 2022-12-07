import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <div className="app__content">
        <div>
          <h1>Modal in React</h1>
          <button className="openModal-btn" onClick={openModal}>
            open
          </button>
        </div>
      </div>
      <Modal open={isOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
