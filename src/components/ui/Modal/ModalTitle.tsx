import {FC, PropsWithChildren} from "react";
import {X} from "lucide-react";
const ModalTitle: FC<PropsWithChildren> = ({children}) => {
    return (<div className={'text-lg font-medium flex gap-2.5'}>
        <div style={{marginTop: '-1px', marginLeft: "auto"}}>
            {children}
        </div>
        <div className={'ml-auto'}>
            <X />
        </div>
    </div>)
}

export default ModalTitle