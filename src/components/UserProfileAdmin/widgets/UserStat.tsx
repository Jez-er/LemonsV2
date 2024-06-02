import {IUserInfo} from "../../../https-api/interface/auth.interface.ts";
import {FC, useEffect} from "react";
import {CalendarFold, LayoutGrid, PieChart, User} from "lucide-react";
import {QueryObserverResult} from "@tanstack/react-query";
import {AxiosResponse} from "axios";
import {useTranslation} from "react-i18next";

interface UserStat {
    user: IUserInfo
    refetch: Promise<QueryObserverResult<AxiosResponse<IUserInfo, any>, Error>>
}

const UserStat: FC<UserStat> = ({user,refetch}) => {
    const {t} = useTranslation()

    useEffect(() => {
        refetch
    }, [user]);

    return (<div className={'flex flex-col m-5 p-5 gap-1.5 rounded-xl bg-white dark:bg-black dark:text-white'}>
        <div className={'flex gap-1.5 items-center'}><User width={16} height={16}/><span className={'font-medium'}>{t('admin.User.Manager.UserProfile.username')}:</span> {user.username}</div>
        <div className={'flex gap-1.5 items-center'}><LayoutGrid width={16} height={16}/><span className={'font-medium'}>UUID:</span> {user.uuid}</div>
        <div className={'flex gap-1.5 items-center'}><CalendarFold width={16} height={16}/><span className={'font-medium'}>{t('admin.User.Manager.UserProfile.registrationData')}:</span> {user.registrationDate}</div>
        <div className={'flex gap-1.5 items-center'}><PieChart width={16} height={16}/><span className={'font-medium'}>{t('admin.User.Manager.UserProfile.status')}:  </span> {user.status}</div>
    </div>)
}

export {UserStat}