import React, { useEffect } from "react";
import { Overlay } from "./ModalStyled";

const Modal = ({ closeModal, children }) => {
    const handleEscape = (e) => e.code === "Escape" && closeModal();

    const onOverlayClick = ({ target, currentTarget }) => {
        target === currentTarget && closeModal();
    };
    useEffect(() => {
        window.addEventListener("keydown", handleEscape);
        const body = document.querySelector("body");
        body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handleEscape);
            const body = document.querySelector("body");
            body.style.overflow = "auto";
        };
    });


    return (
        <Overlay onClick={closeModal && onOverlayClick}>
            <div className='modal'>{children}</div>
        </Overlay>
    );
};

export default Modal;