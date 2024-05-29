import {FC, PropsWithChildren} from "react";
const ModalFooter: FC<PropsWithChildren> = ({children}) => {
    return (<div className={'mx-auto mt-5'}>
        {children}
    </div>)
}

export default ModalFooter