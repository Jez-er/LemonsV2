import {FC, PropsWithChildren} from "react";
import {ModalProps} from "../../../hooks/useModal.ts";
import ModalLayout from "./ModalLayout.tsx";
import ModalTitle from "./ModalTitle.tsx";
import ModalBody from "./ModalBody.tsx";
import ModalFooter from "./ModalFooter.tsx";
interface ModalComponentProps extends PropsWithChildren<ModalProps> {}

const ModalComponent: FC<ModalComponentProps> = ({children, ...layoutProps}) => {
    return <ModalLayout {...layoutProps}>{children}</ModalLayout>
}

const Modal = Object.assign(ModalComponent, {
    Title: ModalTitle,
    Body: ModalBody,
    Footer: ModalFooter,
})
export default Modal