import {SideBar} from "../sidebar/SideBar.tsx";
import {Outlet} from "react-router-dom";

const AdminLayout = () => {
    return (<div className={'h-full w-full flex overflow-hidden'}>
        <div className={'h-full w-1/5'}>
            <SideBar />
        </div>
        <div className={'bg-gray dark:bg-dark-gray h-full w-full'}>
            <Outlet />
        </div>
    </div>)
}

export {AdminLayout}