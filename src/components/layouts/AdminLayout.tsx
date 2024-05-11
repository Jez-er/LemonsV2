import style from './AdminLayout.module.scss'
import {SideBar} from "../sidebar/SideBar.tsx";
import {Outlet} from "react-router-dom";

const AdminLayout = () => {
    return (<div className={style.main}>
        <div className={style.sidebar}>
            <SideBar />
        </div>
        <div className={style.outlet}>
            <Outlet />
        </div>
    </div>)
}

export {AdminLayout}