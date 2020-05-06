import React from 'react';

const Modal = ({ handleClose, handleSave, show, children }) => {
    const showHideClassname = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassname}>
        <section className="modal-main">
          {children}
          < br/>
          <button onClick={handleClose}>close</button>
          <button onClick={handleSave}>save</button>
        </section>
      </div>
    );
  };

export default Modal