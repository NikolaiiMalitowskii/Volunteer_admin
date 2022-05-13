import React from "react";
import {LoaderStyled} from "./LoaderStyled";
import {Circles} from "react-loader-spinner";
import Modal from "../modal/Modal";


const ModalLoader = ({closeModal}) => {
    return (
        <LoaderStyled>
            <Modal closeModal={closeModal}>
                <Circles
                    ariaLabel="loading-indicator"
                    className='spinner'
                    color='cornflowerblue'
                    height={100}
                    width={100}
                />
            </Modal>
        </LoaderStyled>
    );
};

export default ModalLoader;