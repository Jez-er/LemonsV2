import {FC, useState} from "react";
import {icons} from "lucide-react";
import {NavLink} from "react-router-dom";

interface AdminNavButton {
    title: string
    icon: keyof typeof icons
    to: string
}


const AdminNavButton: FC<AdminNavButton> = ({title, icon,to}) => {

    const [isActive, setIsActive] = useState<boolean>(false)

    const active = () => {
        setIsActive(true)
        return 'flex w-5/6 mx-auto h-12 mt-2 items-center no-underline gap-2.5 p-2 p-2opacity-100 border-r-2 rounded-sm border-r-orange-500'
    }

    const deActive = () => {
        setIsActive(false)
        return 'flex w-5/6 mx-auto h-12 mt-2 items-center no-underline gap-2.5 p-2 opacity-60 hover:opacity-85'
    }

    const LucideIcon = icons[icon];
    return (<NavLink to={to} className={({ isActive, isPending }) =>
        isPending ? "pendingNav" : isActive ? active() : deActive()
    }>
        <div>
            {isActive ? <LucideIcon strokeWidth={2} color={'#fcb20f'} /> : <LucideIcon strokeWidth={2} />}
        </div>
        <div>
            {title}
        </div>
    </NavLink>)
}

export {AdminNavButton}