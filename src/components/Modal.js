/**
 * @author Dev Prince Maurya
 * @version 0.0.1
 * ...
 */

import React from "react";

// components
import { CloseButton, ModalContainer, ModalOverlay } from "./StyledComponentAtoms";

/**
 * An molecule component for data table 
 * @param {Boolean} isOpen - open/close state
 * @param {function} onClose - function passed to close modal  
 * @param {Object} children - passed childrens
 */
const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
