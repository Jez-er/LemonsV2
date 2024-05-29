import {UserAvatar} from "../ui/UserAvatar/UserAvatar.tsx";
import {useUserStore} from "../../store/User.store.ts";
import {AdminNavButton} from "./AdminNavButton/AdminNavButton.tsx";
import ThemSwither from "../themSwither";

const SideBar = () => {

    const User = useUserStore(state => state.user)

    return (<div className={'h-full w-full bg-white dark:bg-black dark:text-white flex flex-col'}>
        <h2 className={'mx-auto text-orange-500 text-2xl font-bold mt-5'}>LemonAdmin</h2>
        <div className={'flex mx-auto bg-gray dark:bg-dark-gray w-10/12 h-16 rounded-2xl p-4 items-center mt-5'}>
            <UserAvatar skin={User.assets.skin} />
            <span className={'ml-4'}>{User.username}</span>
            <div className={'ml-auto mr-4'}>
                <ThemSwither />
            </div>
        </div>
        <div className={'mt-2.5'}>
            <span className={'ml-3 opacity-45 font-medium'}>Пользователи</span>
            <AdminNavButton title={'Менеджер пользователей'} icon={'User'} to={'/admin/users/manager'} />
            <AdminNavButton title={'Бан-Панель'} icon={'Ban'} to={'https://bans.lemonbrick.by/'} />
        </div>
        </div>)
}

export {SideBar}