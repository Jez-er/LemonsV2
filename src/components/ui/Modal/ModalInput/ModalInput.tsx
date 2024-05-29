import {FC} from "react";
import cn from "classnames";

interface ModalInputProps {
    title: string
    state: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    error: string | null
}

const ModalInput: FC<ModalInputProps> = ({title, state, onChange, error}) => {

    return <div className={'flex flex-col mt-4'}>
        <span className={cn('text-sm ml-2 opacity-60 font-medium', error ? 'text-red' : 'dark:text-white text-black' )}>{title}</span>
        <input
            type="text"
            className={'pl-3  rounded-xl outline-none outline-transparent bg-gray dark:bg-dark-gray h-9 w-5/5 placeholder:opacity-80  placeholder:text-black dark:placeholder:text-white border-transparent dark:text-white'}
            value={state}
            onChange={onChange}
        />
        <span className={'text-sm ml-2 opacity-60 font-medium text-red'}>{error ? error : null}</span>
    </div>
}

export default ModalInput