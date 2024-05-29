import {FC, PropsWithChildren} from "react";
const ModalBody: FC<PropsWithChildren> = ({children}) => {
    return (<div className={'mx-auto flex flex-col mt-3'}>
            {children}
    </div>)
}

export default ModalBody