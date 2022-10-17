import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Show Modal
      </button>

      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}

export default App;
