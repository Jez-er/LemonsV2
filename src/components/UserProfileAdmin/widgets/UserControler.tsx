import {useMutation} from "@tanstack/react-query";
import UserService from "../../../https-api/service/user.service.ts";
import {FC} from "react";
import AdminService from "../../../https-api/service/admin.service.ts";
import Notification from "../../notification/Notification.tsx";
import BanUser from "../modals/BanUser.tsx";
import useModal from "../../../hooks/useModal.ts";
import {t} from "i18next";


interface UserControler {
    id: number | undefined
}

const   UserControler: FC<UserControler> = ({id}) => {

    const ModalProps = useModal()

    const {mutate,} = useMutation({
        mutationKey: ['DeleteStatus'],
        mutationFn: (id: number | undefined) => UserService.deleteUserStatus(id)
    })

    const {mutateAsync, isSuccess, isError} = useMutation({
        mutationKey: ['UnBan'],
        mutationFn: (id: number | undefined) => AdminService.unban(id)
    })

    const deleteStatus = () => {
        mutate(id)
    }

    const unBan = async () => {
        await mutateAsync(id)
    }
    return (<div className={'flex m-5 p-5 h-full gap-1.5 rounded-xl bg-white dark:bg-black justify-center '}>
        <button onClick={deleteStatus} className={'h-full w-1/4 mr-2 text-white outline-none border-none rounded-xl font-medium cursor-pointer bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600'}>
            <span className={' p-1'}>{t('admin.User.Manager.UserProfile.deleteStatus')}</span>
        </button>
        <button onClick={ModalProps.onOpen} className={'h-full w-1/4 mr-2 text-white outline-none border-none rounded-xl font-medium cursor-pointer bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600'}>
            {t('admin.User.Manager.UserProfile.ban')}
        </button>
        <button onClick={unBan} className={'h-full w-1/4 mr-2 text-white outline-none border-none rounded-xl font-medium cursor-pointer bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600'}>
            {t('admin.User.Manager.UserProfile.unBan')}
        </button>
        <BanUser Props={ModalProps} userId={id} />
        {isSuccess ? <Notification type={'Done'} text={'Розбанен'} /> : isError ? <Notification type={"Error"} /> : null}
    </div>)
}

export {UserControler}