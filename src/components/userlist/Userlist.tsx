import style from './Userlist.module.scss'
import {UserAvatar} from "../UserAvatar/UserAvatar.tsx";
import React, {FC} from "react";
import {AllUsers} from "../../https-api/interface/user.interface.ts";

interface UserlistProps {
    data: AllUsers[];
}

const Userlist: FC<UserlistProps> = ({data}) => {
    return (
        <>
            {data.map(user => (
                <div className={style.main} key={user.id}>
                    <span className={style.id}>{user.id}</span>
                    <div className={style.logo}><UserAvatar skin={user.assets.skin}/></div>
                    <span className={style.username}>{user.username}</span>
                    <span className={style.uuid}>{user.uuid}</span>
                </div>
            ))}
        </>
    );
}

export default React.memo(Userlist);