import {ConfirmationStyled} from "./ConfirmationStyled";
import Modal from "../modal/Modal";
import sprite from '../../icons/commonSprite.svg'
import {useEffect} from "react";

const Confirmation = ({onHandleClose, onHandleDelete, text = 'Do you agree to delete selected item?'}) => {
    const closeModal = () => {
        onHandleClose()
    }
    const onHandleAgree = () => {
        onHandleDelete()
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') onHandleDelete()

    }
    useEffect(() => {
        window.addEventListener('keypress', handleKeyPress);
        return () => window.addEventListener('keypress', handleKeyPress);
    }, []);

    return (
        <Modal closeModal={closeModal}>
            <ConfirmationStyled>
                <div className="confirmationHeader">
                    <div className="confirmationHeaderIconContainer">
                        <svg className="confirmationHeaderIcon">
                            <use href={sprite + '#icon-warning'}/>
                        </svg>
                    </div>

                    <h2 className='confirmationHeaderTitle'>Warning</h2>
                </div>
                <div className="confirmationBody">
                    <p>{text}</p>
                    <div className="confirmationButtonContainer">
                        <button className="confirmationCancel" onClick={closeModal}>Cancel</button>
                        <button className="confirmationAgree" onClick={onHandleAgree}>Ok</button>
                    </div>
                </div>
            </ConfirmationStyled>
        </Modal>

    )
}

export default Confirmation