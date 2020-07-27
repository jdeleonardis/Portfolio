import React from "react";
import "../../Styles/style.css";
import Modal from "react-bootstrap/Modal";


function SimpleModal(props) {
    
  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Body>{props.modalText}</Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide}
          className="btn btn-primary mb-3"
          >Close</button>   
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SimpleModal;