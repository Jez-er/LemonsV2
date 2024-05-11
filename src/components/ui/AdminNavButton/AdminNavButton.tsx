import style from './AdminnavButton.module.scss'
import {FC} from "react";
import {icons} from "lucide-react";
import {NavLink} from "react-router-dom";

interface AdminNavButton {
    title: string
    icon: keyof typeof icons
    to: string
}

const AdminNavButton: FC<AdminNavButton> = ({title, icon,to}) => {
    const LucideIcon = icons[icon];
    return (<NavLink to={to} className={style.main}>
        <div className={style.icon}>
            <LucideIcon strokeWidth={2} />
        </div>
        <div className={style.text}>
            {title}
        </div>
    </NavLink>)
}

export {AdminNavButton}