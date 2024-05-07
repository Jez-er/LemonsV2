import style from './AdminLayout.module.scss'
import {SideBar} from "../../SideBar/SideBar.tsx";
import {Outlet} from "react-router-dom";

const AdminLayout = () => {
    return (<div className={style.body}>
        <div className={style.layoutWraper}>
            <div className={style.sidebar}>
                <SideBar/>
            </div>
            <main className={style.main}>
                <Outlet/>
            </main>
        </div>


    </div>)
}

export {AdminLayout}