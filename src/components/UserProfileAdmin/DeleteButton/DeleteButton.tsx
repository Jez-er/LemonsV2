import {FC} from "react";
import {Trash2} from "lucide-react";

interface DeleteButton {
    title: string
    width: number
    height: number
}

const DeleteButton: FC<DeleteButton> = ({title,width, height}) => {
    return (<div className={'bg-red flex items-center pl-0.5 cursor-pointer rounded-lg justify-center p-1 text-white'} style={{width: `${width}vw`, height: `${height}vh`}}>
        <Trash2 strokeWidth={2} width={width*4.5}/>
        <span style={{marginLeft: '0.3vw', fontSize: `0.8em`}}>{title}</span>
    </div>)
}

export {DeleteButton}