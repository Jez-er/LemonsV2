import {FC, useState} from "react";
import Modal from "../../ui/Modal";
import {ModalProps} from "../../../hooks/useModal.ts";
import ModalButton from "../../ui/Modal/ModalButton/ModalButton.tsx";
import cn from "classnames";
import ModalInput from "../../ui/Modal/ModalInput/ModalInput.tsx";
import {useMutation} from "@tanstack/react-query";
import AdminService from "../../../https-api/service/admin.service.ts";
import Notification from "../../notification/Notification.tsx";
import {t} from "i18next";

interface BanUserProps {
    Props: ModalProps
    userId: number | undefined
}

const BanUser: FC<BanUserProps> = ({Props, userId}) => {

    const [Reason, setReason] = useState<string>('')
    const [Data, setData] = useState<string>('')
    const [foreverBan, setForeverBan] = useState<boolean>(false)
    const [ironBan, setIronBan] = useState<boolean>(false)

    type ban = {
        reason: string
        forever: boolean
        endDate: string
        isHardware: boolean
    }

    const {mutate, isPending, isError} = useMutation({
        mutationKey: ['BanUser', userId],
        mutationFn: ({reason, endDate,forever, isHardware}: ban) => AdminService.ban(userId, reason, endDate, forever, isHardware)
    })

    const BanHendler = () => {
        const result: ban = {
            reason: Reason,
            endDate: new Date(Data).toISOString(),
            forever: foreverBan,
            isHardware: ironBan
        }
        console.log(result)
        if (Reason !== '') {
            if (Data !== '') {
                mutate(result)
                Props.onClose()
            } else  {
                setDataError(t('error.isEmpty'))
            }
        } else {
            setReasonError(t('error.isEmpty'))
        }
    }

    const [reasonError, setReasonError] = useState<string | null>(null)
    const [DataError, setDataError] = useState<string | null>(null)

    return (
        <Modal {...Props} >
            <Modal.Title>{t('admin.User.Manager.UserProfile.Modal.Title')}</Modal.Title>
            <Modal.Body>
                <ModalInput title={t('admin.User.Manager.UserProfile.Modal.Reason')} state={Reason} onChange={(e) => setReason(e.target.value)} error={reasonError} />
                <input
                    type={'datetime-local'}
                    className={'pl-3 mt-2 rounded-xl outline-none outline-transparent bg-gray dark:bg-dark-gray h-9 w-5/5 placeholder:opacity-80  placeholder:text-black dark:placeholder:text-white border-transparent dark:text-white'}
                    value={Data}
                    onChange={(e) => setData(e.target.value)}
                />
                <span className={'text-sm ml-2 opacity-60 font-medium text-red'}>{DataError}</span>
                <div className={'flex items-center mt-5'}>
                    <div onClick={() => setForeverBan(!foreverBan)}
                         className={cn('w-6 h-6 rounded-xl mr-4', foreverBan ? 'bg-green' : 'bg-red')}></div>
                    <span>{t('admin.User.Manager.UserProfile.Modal.ForeverBan')}</span>
                </div>
                <div className={'flex items-center mt-5'}>
                    <div onClick={() => setIronBan(!ironBan)}
                         className={cn('w-6 h-6 rounded-xl mr-4', ironBan ? 'bg-green' : 'bg-red')}></div>
                    <span>{t('admin.User.Manager.UserProfile.Modal.IronBan')}</span>
                </div>
            </Modal.Body>
            <Modal.Footer><div onClick={BanHendler}><ModalButton title={t('admin.User.Manager.UserProfile.ban')}/></div></Modal.Footer>
            {isPending ? <Notification type={'Done'} text={'Пользователь забанен'} /> : isError ? <Notification type={"Error"} /> : null}

        </Modal>
    )
}

export default BanUser