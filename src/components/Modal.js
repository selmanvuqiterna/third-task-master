import React from "react";
import "./modal.css";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground" onClick={()=> closeModal(false)}> 
      
        <div className="modalContainer">
          <div className="title"><h3>Theme Color</h3>   <h5>Change Theme</h5></div>
            <div className="fontColor">
              <p>Font Color</p>
              <div className="right-side">
              <p>#4444</p>
              <div className='box'></div>
              </div>
              </div>
            <div className="bcgColor">
            <p>Background Color</p>
              <div className="right-side">
              <p>#4444</p>
              <div className='box'></div>
              </div>
            </div>
            <div className="btnColor">
            <p>Button Color</p>
              <div className="right-side">
              <p>#4444</p>
              <div className='box'></div>
              </div>
            </div>
            <div className="btnboxColor">
            <p>Button Box Color</p>
              <div className="right-side">
              <p>#4444</p>
              <div className='box'></div>
              </div>
            </div>
            <div className="btnMoColor">
            <p>Button Mouseover Color</p>
              <div className="right-side">
              <p>#4444 hello guys</p>
              <div className='box'></div>
              </div>
            </div>

            <button className='saveButton'>Save</button>
            <button className='cancelButton' onClick={()=> closeModal(false)}>Cancel</button>
        </div>

    </div>
  );
}

export default Modal;
