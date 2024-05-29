import {UserAvatar} from "../ui/UserAvatar/UserAvatar.tsx";
import React, {FC} from "react";
import {AllUsers} from "../../https-api/interface/user.interface.ts";
import {Pen} from "lucide-react";
import {NavLink} from "react-router-dom";

interface UserlistProps {
    data: AllUsers[];
}

const Userlist: FC<UserlistProps> = ({data}) => {
    return (
        <>
            {data.map(user => (
                <div className={'flex w-11/12 h-16 bg-white dark:bg-black dark:text-white mt-4 items-center rounded-xl'} key={user.id}>
                    <span className={'ml-5 w-10'}>{user.id}</span>
                    <div className={'w-3 h-3 bg-red ml-3 mr-7 rounded-xl'}></div>
                    <div className={'ml-2'}><UserAvatar skin={user.assets.skin}/></div>
                    <span className={'ml-5 w-40'}>{user.username}</span>
                    <span className={'ml-3.5'}>{user.uuid}</span>
                    <NavLink className={'bg-orange-500 ml-auto mr-10 w-10 h-10 flex justify-center items-center rounded-xl cursor-pointer'} to={`/admin/users/manager/${user.uuid}`}>
                        <Pen color={'White'} />
                    </NavLink>
                </div>
            ))}
        </>
    );
}

export default React.memo(Userlist);