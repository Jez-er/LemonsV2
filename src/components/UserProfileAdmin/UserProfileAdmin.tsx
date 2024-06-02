import {useMutation, useQuery} from "@tanstack/react-query";
import UserService from "../../https-api/service/user.service.ts";
import {useParams} from "react-router-dom";
import {UserStat} from "./widgets/UserStat.tsx";
import UserSkin from "../ui/UserSkin/UserSkin.tsx";
import {DeleteButton} from "./DeleteButton/DeleteButton.tsx";
import {UserControler} from "./widgets/UserControler.tsx";
import {UserGroups} from "./widgets/UserGroups.tsx";
import {useEffect} from "react";
import Notification from "../notification/Notification.tsx";
import {t} from "i18next";

const UserProfileAdmin = () => {

    const {uuid} = useParams()

    const {data, refetch} = useQuery({
        queryKey: ['user'],
        queryFn: () => UserService.userByUuid(uuid)
    })

    const {mutate, isSuccess, isError} = useMutation({
        mutationKey: ['deleteAssets'],
        mutationFn: (assets: string) => UserService.adminDeleteUserAssets(data?.data.id, assets)
    })

    const DeleteSkin = () => {
        mutate("SKIN")
    }

    const DeleteCape = () => {
        mutate("CAPE")
    }

    useEffect(() => {
        refetch()
    }, [data?.data.assets.skin, data?.data.assets.cape]);

    return <div className={'h-full w-full'}>
        <div className={'flex h-55%'}>
            <div className={'bg-white dark:bg-black m-4 flex flex-col items-center rounded-xl'}>
                <UserSkin
                    skinUrl={typeof data?.data.assets.skin === 'string' ? data?.data.assets.skin : data?.data.assets.skin?.url || ''}
                    capeUrl={typeof data?.data.assets.cape === 'string' ? data?.data.assets.cape : data?.data.assets.cape?.url}/>
                <div className={'flex justify-center gap-2 mb-10'}>
                    <div onClick={DeleteSkin}>
                        <DeleteButton title={t('admin.User.Manager.UserProfile.skin')} width={4} height={4.5}/>
                    </div>
                    <div onClick={DeleteCape}>
                        <DeleteButton title={t('admin.User.Manager.UserProfile.cape')} width={4} height={4.5}/>
                    </div>
                </div>
            </div>
            <div className={'flex flex-col w-full h-full'}>
                {data && <UserStat user={data?.data} refetch={refetch()}/>}
                <UserControler id={data?.data.id}/>
            </div>
            <UserGroups data={data?.data.groups} id={data?.data.id} refetch={refetch()}/>
        </div>
        <div className={'flex h-45%'}>
            <div className={'bg-white dark:bg-black dark:text-white m-4 p-5 w-11/12 flex flex-col items-center rounded-xl'}>
                g
            </div>
            <div className={'bg-white dark:bg-black m-4 dark:text-white p-5 w-11/12 flex flex-col items-center rounded-xl'}>
                g
            </div>
        </div>
        {isSuccess ? <Notification type={'Done'} text={'Ассет удалён'}/> : isError ?
            <Notification type={'Error'} text={'Произошла ошибка'}/> : null}
    </div>
}

export {UserProfileAdmin}