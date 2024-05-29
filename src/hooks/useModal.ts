import {useEffect, useState} from "react";

export interface ModalProps {
    visible: boolean;
    onOpen: () => void;
    onClose: () => void;
    animation: ModalAnimatio
}
type ModalAnimatio = 'in' | 'out'
const useModal = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [animation, setAnimation] = useState<ModalAnimatio>('in')

    const handleOpenModal = () => setVisible(true);
    const handleCloseModal = () => {
        setAnimation('out')
        setTimeout(() => setVisible(false), 500)
    }
    useEffect(() => {
        setAnimation('in')
        document.body.style.overflow = visible ? 'hidden' : 'auto'
    }, [visible])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if(e.key === 'Escape') {
                handleCloseModal()
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return { visible, onOpen: handleOpenModal, onClose: handleCloseModal, animation };
}

export default useModal;
