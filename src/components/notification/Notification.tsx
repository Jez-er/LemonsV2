import {FC, useState} from "react";
import {CircleAlert, CircleCheckBig, CircleX} from "lucide-react";
import Portal from "../common/Portal.tsx";
import cn from "classnames";

interface NotificationProps {
    type: 'Done' | 'Warn' | "Error"
    text?: string
}

const Notification: FC<NotificationProps> = ({type, text}) => {

    const [visible, setVisible] = useState<boolean>(true)
    const [animation, setAnimation] = useState<'in' | 'out'>('in')
    setTimeout(() => setAnimation('out'), 2200)
    setTimeout(() => setVisible(false), 3000)
    if (!visible) return null
    return(<Portal target={"notification-root"} ><div className={'fixed top-0 right-0 w-full h-full flex justify-center items-end'}>
        <div className={cn('opacity-85 flex items-center min-w-40 max-w-96 h-14 mb-10 bg-white dark:bg-black shadow shadow-white dark:shadow-black rounded-xl p-5 dark:text-white', animation === 'out' ? 'animate-notification-out' : 'animate-notification-in')}>
            {(type === 'Done') ? <CircleCheckBig color="#02bf06" width={28} height={28} /> : null}
            {(type === 'Error') ? <CircleX color="#ff0000" width={28} height={28} /> : null}
            {(type === 'Warn') ? <CircleAlert color="#fc8003" width={28} height={28} /> : null}
            <div className={'w-1 h-9 bg-gray dark:bg-dark-gray mx-3 rounded-xl'} />
            <div style={{marginRight: '0.5vw', maxWidth: '70%'}}>
                {(type === 'Error') ? 'Произошла ошибка' : text}
            </div>

        </div>

    </div></Portal>)
}

export default Notification