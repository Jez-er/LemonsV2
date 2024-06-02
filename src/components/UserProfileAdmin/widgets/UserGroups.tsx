import {FC, useEffect} from "react";
import {IUserGroups, IUserInfo} from "../../../https-api/interface/auth.interface";
import { DiamondPlus, LayoutGrid, ShieldPlus, Trash2 } from "lucide-react";
import {QueryObserverResult, useMutation} from "@tanstack/react-query";
import UserService from "../../../https-api/service/user.service.ts";
import useModal from "../../../hooks/useModal.ts";
import {AddGroup} from "../modals/AddGroup.tsx";
import Notification from "../../notification/Notification.tsx";
import {AxiosResponse} from "axios";
import {t} from "i18next";

interface UserGroupsProps {
    id: number | undefined
    data: IUserGroups[] | undefined;
    refetch: Promise<QueryObserverResult<AxiosResponse<IUserInfo, any>, Error>>
}

const UserGroups: FC<UserGroupsProps> = ({ data, id, refetch }) => {

    useEffect(() => {
        refetch
    }, [data])

    const {mutateAsync, isSuccess, isError} = useMutation({
        mutationKey: ['deleteGroup'],
        mutationFn: (group: string | undefined) => UserService.deleteUserGroup(id, group),
    })

    const getCustomValue = (groupName: string) => {
        switch (groupName) {
            case 'ADMIN':
                return t('admin.User.Manager.UserProfile.UserGroups.ADMIN');
            case 'BUILDER':
                return t('admin.User.Manager.UserProfile.UserGroups.BUILDER');
            case 'MODERATOR':
                return t('admin.User.Manager.UserProfile.UserGroups.MODERATOR');
            case 'HELPER':
                return t('admin.User.Manager.UserProfile.UserGroups.HELPER');
            case 'HD':
                return t('admin.User.Manager.UserProfile.UserGroups.HD');
            case 'PLAYER':
                return t('admin.User.Manager.UserProfile.UserGroups.PLAYER');
            case 'Tester':
                return t('admin.User.Manager.UserProfile.UserGroups.Tester');
            default:
                return t('admin.User.Manager.UserProfile.UserGroups.PLAYER');
        }
    };

    const deleteGroup = async (name: string) => {
        await mutateAsync(name)
        console.log(name)
    }

    const ModalProps = useModal()

    return (
        <div className={'flex flex-col dark:bg-black dark:text-white bg-white m-5 p-5 w-full h-11/12 rounded-xl'}>
                {data?.length ? (
                    <div className={'h-full flex flex-col'}>
                        <div className={'max-h-full overflow-y-auto h-11/12'}>
                            {data.map(group => (
                                <div className={'flex items-center border-black/30 dark:border-white/30 border-2 mb-5 p-5 rounded-xl overflow-auto'} key={group.groupName}>
                                    {group.groupName === 'ADMIN' ? <ShieldPlus /> : <LayoutGrid />}
                                    <span className={'ml-4'}>{getCustomValue(group.groupName)}</span>
                                    <div onClick={() => deleteGroup(group.groupName)} className={'ml-auto cursor-pointer'}>
                                        <div className={'hover:bg-black/15 dark:hover:bg-white/15 duration-500 w-9 h-9 flex justify-center items-center rounded-3xl'}>
                                            <Trash2  />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div onClick={ModalProps.onOpen} className={'flex justify-center pt-3 '}>
                            <div className={'hover:bg-black/15 dark:hover:bg-white/15 duration-500 w-11 h-11 flex justify-center items-center rounded-3xl'}>
                                <DiamondPlus style={{cursor: "pointer"}}/>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div onClick={ModalProps.onOpen} style={{display: 'flex', justifyContent: "center", alignItems: "center", height: '100%'}}>
                        <DiamondPlus style={{cursor: "pointer"}} />
                    </div>

                )}
            <AddGroup Props={ModalProps} userId={id}/>
            {isSuccess ? <Notification type={'Done'} text={'Группа удалена'} /> : null}
            {isError ? <Notification type={'Error'} /> : null}
        </div>
    );
};

export { UserGroups };