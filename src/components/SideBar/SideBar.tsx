import styles from './SideBar.module.scss'
import {AdminNavButton} from "../../ui/adminNavButton/AdminNavButton.tsx";
import {SelectAdminProfile} from "../selectUser/selectAdminProfile.tsx";

const SideBar = () => {
    return (<>
        <div className={styles.main}>
            <h2 className={styles.header}>LemonAdmin</h2>
            <SelectAdminProfile />
            <div className={styles.categoriesWraper}>
                <span className={styles.categories}>Статистика</span>
                <AdminNavButton title={'Сайт'} icon={'Blinds'} to={'/admin'}/>
                <AdminNavButton title={'Сервер'} icon={'Server'} to={'/'}/>

                <span className={styles.categories}>Пользеватели</span>
                <AdminNavButton title={'Менеджер пользователей'} icon={'User'} to={'/admin/users/manager'}/>
            </div>
        </div>
    </>)
}

export {SideBar}