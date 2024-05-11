import style from './UserProfileAdmin.module.scss'
import {useQuery} from "@tanstack/react-query";
import UserService from "../../https-api/service/user.service.ts";
import {useParams} from "react-router-dom";

const UserProfileAdmin = () => {

    const {uuid} = useParams()

    const {data} = useQuery({
        queryKey: ['user'],
        queryFn: () => UserService.userByUuid(uuid)
    })

    console.log(data)
    return (<div className={style.main}>
        {data?.data.username}
    </div>)
}

export {UserProfileAdmin}