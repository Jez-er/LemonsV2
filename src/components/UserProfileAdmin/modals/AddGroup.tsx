import {ModalProps} from "../../../hooks/useModal.ts";
import Modal from "../../ui/Modal";
import {FC, useState} from "react";
import ModalInput from "../../ui/Modal/ModalInput/ModalInput.tsx";
import ModalButton from "../../ui/Modal/ModalButton/ModalButton.tsx";
import {useMutation} from "@tanstack/react-query";
import UserService from "../../../https-api/service/user.service.ts";
import {t} from "i18next";


interface AddGroupProps {
    Props: ModalProps
    userId: number | undefined
}

const AddGroup: FC<AddGroupProps> = ({Props, userId}) => {

    const [groupName, setName] = useState<string>('')
    const [days, setDays] = useState<string>('0')
    const [priority, setPriority] = useState<string>('0')

    interface AddGroupParams {
        groupName: string;
        days: string;
        priority: string;
    }

    const {mutate} = useMutation({
        mutationKey: ['AddGroup'],
        mutationFn: ({groupName, days, priority}: AddGroupParams) => UserService.AddGroup(userId, groupName, days, priority)
    })

    const AddGroup = () => {
        const groupParams: AddGroupParams = {
            groupName,
            days,
            priority
        };
        if (groupName !== '') {
            if (days !== '') {
                if (priority !== '') {
                    mutate(groupParams)
                    Props.onClose()
                    setName('')
                    setDays('0')
                    setPriority('0')
                } else {
                    setPriorityError(t('error.isEmpty'))
                }
            } else {
                setDaysError(t('error.isEmpty'))
            }
        } else {
            setNameError(t('error.isEmpty'))
        }

    }

    const [NameError, setNameError] = useState<string | null>(null)
    const [DaysError, setDaysError] = useState<string | null>(null)
    const [PriorityError, setPriorityError] = useState<string | null>(null)

    return (
        <Modal {...Props}>
            <Modal.Title>
                {t('admin.User.Manager.UserProfile.UserGroups.Modal.Title')}
            </Modal.Title>
            <Modal.Body>
                <ModalInput title={t('main.title')} state={groupName} onChange={(e) => setName(e.target.value)} error={NameError}/>
                <ModalInput title={t('admin.User.Manager.UserProfile.UserGroups.Modal.dayToFinish')} state={days} onChange={(e) => setDays(e.target.value)} error={DaysError}/>
                <ModalInput title={t('admin.User.Manager.UserProfile.UserGroups.Modal.Priority')} state={priority} onChange={(e) => setPriority(e.target.value)} error={PriorityError}/>
            </Modal.Body>
            <Modal.Footer>
                <div onClick={AddGroup}>
                    <ModalButton title={t('main.add')}/>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export {AddGroup}