import style from './selectAdminProfile.module.scss'
import {useUserStore} from "../../store/User.store.ts";
import {UserAvatar} from "../UserAvatar/UserAvatar.tsx";
import {Moon} from "lucide-react";

const SelectAdminProfile = () => {

    const user = useUserStore(state => state.user)

    return (<div className={style.main}>
        <UserAvatar skin={user.assets.skin}/>
        <span className={style.username}>{user.username}</span>
        <div className={style.thema}>
            <Moon strokeWidth={1} />
        </div>
    </div>)
}

export {SelectAdminProfile}