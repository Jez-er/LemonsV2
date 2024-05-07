import style from './UserManager.module.scss'
import Userlist from "../../../components/userlist/Userlist.tsx";
import {useQuery} from "@tanstack/react-query";
import UserService from "../../../https-api/service/user.service.ts";

const UserManager = () => {
    let currentPage = 0


    const {data, refetch} = useQuery({
        queryKey: ['AllUsers'],
        queryFn: () => UserService.allUsers(currentPage).then((res) => res.data)

    })

    const elements = [];

    if (data && data.totalPages) {
        const count = data.totalPages;

        const setPage = (i: number) => {
            currentPage = i-1
            refetch().then(() => console.log('fff'))
            console.log('test')
        }

        for (let i = 1; i <= count; i++) {
            elements.push(
                <div key={i} className={style.paginates} onClick={() => setPage(i)}>
                    <span className={style.paginates_item}>{i}</span>
                </div>
            );
        }
    }
    return (
        <>
            <div className={style.bg}>
                <div className={style.main}>
                    <span className={style.id}>ID</span>
                    <div className={style.logo}>Avatar</div>
                    <span className={style.username}>UserName</span>
                    <span className={style.uuid}>UUID</span>
                </div>
                <div className={style.wraper}>
                    <div className={style.paginate}>
                        {elements}
                    </div>
                    <div className={style.plates}>
                        {(data && data.totalPages) ? <Userlist data={data.data}/> : `Netu`}
                    </div>
                </div>

            </div>
        </>)
}

export {UserManager}