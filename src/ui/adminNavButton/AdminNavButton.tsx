import {FC} from "react";
import {icons} from "lucide-react";
import style from './AdminNavButton.module.scss'
import {NavLink} from "react-router-dom";
interface IAdminNavButton {
    title: string
    icon: keyof typeof icons
    to: string
}

const AdminNavButton: FC<IAdminNavButton> = ({title, icon, to}) => {
    const LucidIcon = icons[icon]
    return (
        <>

            <NavLink className={({ isActive, isPending }) =>
                isPending ? style.activeButton : isActive ? style.activeButton : style.button
            } to={to}>
                <div>
                    <LucidIcon height={20} width={20} strokeWidth={1.8}/>
                </div>
                <div className={style.text}>
                    <span>{title}</span>
                </div>
            </NavLink>
        </>
    )
}

export {AdminNavButton}