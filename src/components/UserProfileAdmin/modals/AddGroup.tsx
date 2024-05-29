import {ModalProps} from "../../../hooks/useModal.ts";
import Modal from "../../ui/Modal";
import {FC, useState} from "react";
import ModalInput from "../../ui/Modal/ModalInput/ModalInput.tsx";
import ModalButton from "../../ui/Modal/ModalButton/ModalButton.tsx";
import {useMutation} from "@tanstack/react-query";
import UserService from "../../../https-api/service/user.service.ts";


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
                    setPriorityError('Не должно быть пустым')
                }
            } else {
                setDaysError('Не должно быть пустым')
            }
        } else {
            setNameError('Не должно быть пустым')
        }

    }

    const [NameError, setNameError] = useState<string | null>(null)
    const [DaysError, setDaysError] = useState<string | null>(null)
    const [PriorityError, setPriorityError] = useState<string | null>(null)

    return (
        <Modal {...Props}>
            <Modal.Title>
                Добавление группы
            </Modal.Title>
            <Modal.Body>
                <ModalInput title={'Название'} state={groupName} onChange={(e) => setName(e.target.value)} error={NameError}/>
                <ModalInput title={'Дней до истичения'} state={days} onChange={(e) => setDays(e.target.value)} error={DaysError}/>
                <ModalInput title={'Приоритет'} state={priority} onChange={(e) => setPriority(e.target.value)} error={PriorityError}/>
            </Modal.Body>
            <Modal.Footer>
                <div onClick={AddGroup}>
                    <ModalButton title={'Добавить'}/>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export {AddGroup}