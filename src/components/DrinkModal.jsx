import { Modal, Image } from 'react-bootstrap';
import useDrinks from '../hooks/useDrinks';

const DrinkModal = () => {

    const { modal, handleModalClick} = useDrinks()
    console.log(recipe);

    return (
        <Modal show={modal} onHide={handleModalClick}>
            <Modal.Body>

            </Modal.Body>
        </Modal>
    );
}

export default DrinkModal;
