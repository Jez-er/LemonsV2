import style from './SideBar.module.scss'
import {UserAvatar} from "../ui/UserAvatar/UserAvatar.tsx";
import {useUserStore} from "../../store/User.store.ts";
import {Moon} from "lucide-react";
import {AdminNavButton} from "../ui/AdminNavButton/AdminNavButton.tsx";

const SideBar = () => {

    const User = useUserStore(state => state.user)

    return (<div className={style.main}>
        <h2 className={style.header}>LemonAdmin</h2>
        <div className={style.user}>

            <UserAvatar skin={User.assets.skin} />
            <span style={{marginLeft: '0.7vw'}}>{User.username}</span>
            <Moon strokeWidth={1}  style={{marginLeft: 'auto', marginRight: '1vw'}}/>
        </div>
        <div className={style.category}>
            <span className={style.categoryHeader}>Пользователи</span>
            <AdminNavButton title={'Менеджер пользователей'} icon={'User'} to={'/admin/users/manager'} />
        </div>


        </div>)
}

export {SideBar}