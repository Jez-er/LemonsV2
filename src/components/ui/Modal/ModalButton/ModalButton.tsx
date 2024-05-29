import {FC} from "react";

interface ModalButtonProps {
    title: string
}

const ModalButton: FC<ModalButtonProps> = ({title}) => {
    return <button className={'w-32 h-7 rounded-xl text-orange-500 hover:bg-orange-500 hover:text-white'}>
        {title}
    </button>
}

export default ModalButton