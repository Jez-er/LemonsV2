import {useState} from "react";
import {useUserStore} from "../store/User.store.ts";

const AuthPage = () => {
    const [login, setLogin] = useState<string>('')
    const [pass, setPass] = useState<string>('')

    const log = useUserStore(state => state.login)
    const isAuth = useUserStore(state => state.isAuth)
    const isAdmin = useUserStore(state => state.isAdmin)
    const user = useUserStore(state => state.user)

    const submithandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        log(login, pass)
    }
    return (<div>
        <form onSubmit={e => submithandler(e)}>
            <input type="text" placeholder={'login'} value={login} onChange={e => setLogin(e.target.value)}/>
            <input type="text" placeholder={'pass'} value={pass} onChange={e => setPass(e.target.value)}/>
            <button>Enter</button>
        </form>
        <div>{isAuth ? `Логин: ${user.username}` : <div>Не авторизован</div>}</div>
        <div>{isAdmin ? `Админ` : <div>Лох</div>}</div>
    </div>)
}

export {AuthPage}