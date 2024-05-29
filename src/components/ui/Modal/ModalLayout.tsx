import {FC, PropsWithChildren} from "react";
import {ModalProps} from "../../../hooks/useModal.ts";
import Portal from "../../common/Portal.tsx";
import cn from "classnames";

interface ModalLayoutProps extends PropsWithChildren<ModalProps> {}

const ModalLayout: FC<ModalLayoutProps> = ({visible, onClose, children, animation}) => {
    if (!visible) return null
    return (<Portal target={'modal-root'}>
        <div onClick={onClose} className={cn('fixed top-0 left-0 w-screen h-screen bg-black/30 flex justify-center items-center animate', animation === 'out' ? 'animate-modal-out' : 'animate-modal-in')}>
            <div onClick={e => e.stopPropagation()} className={'flex flex-col px-10 py-5 bg-white dark:bg-black dark:text-white rounded-xl '}>{children}</div>
        </div>
    </Portal>)
}

export default ModalLayout