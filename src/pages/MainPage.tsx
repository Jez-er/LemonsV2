import { useNavigate } from "react-router-dom";
import Modal from "../components/ui/Modal";
import useModal from "../hooks/useModal.ts";
import Loader from "../components/ui/loader";
import ThemSwither from "../components/themSwither";

const MainPage = () => {

    const modalProps = useModal()
    const nav = useNavigate();

    const handleAuthClick = () => {
        nav('/auth');
    };
    const handleAdminClick = () => {
        nav('/admin');
    };

    return (
        <div className={'dark:bg-black min-h-screen'}>
            <ThemSwither />
            <button onClick={handleAuthClick}>Авторизация</button>
            <button onClick={handleAdminClick}>Админка</button>
            <button onClick={modalProps.onOpen}>Модалка</button>
            <Modal {...modalProps}>
                <Modal.Title>
                    Тест
                </Modal.Title>
                <Modal.Body>
                    Hello World
                </Modal.Body>
                <Modal.Footer>
                    <button> Загрузить</button>
                </Modal.Footer>
            </ Modal>
            <Loader />
        </div>
    );
};

export {MainPage};