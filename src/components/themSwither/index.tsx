import {Moon, Sun} from "lucide-react";
import {FC, useEffect, useState} from "react";

const ThemSwither: FC = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
    )
    const element = document.documentElement
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const onWindowMatch = () => {
        if (localStorage.them === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
            element.classList.add('dark')
        } else {
            element.classList.remove('dark')
        }
    }
    onWindowMatch()
    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                break;
            case 'light':
                element.classList.remove('dark')
                localStorage.setItem('theme', 'light');
                break;
            default:
                localStorage.removeItem('theme');
                onWindowMatch()
                break;
        }
    }, [theme]);

    darkQuery.addEventListener('change', (e) => {
        if (!('theme' in localStorage)) {
            if (e.matches) {
                element.classList.add('dark')
            } else {
                element.classList.remove('dark')
            }
        }
    })

    return (<div>
        {(theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) ? <button onClick={() => {setTheme('light')}} className={'hover:animate-pulse'}><Sun strokeWidth={1.5} color={'#FFF'} /></button>
            : <button onClick={() => {setTheme('dark')}} className={'hover:animate-pulse'}><Moon strokeWidth={1.5} /> </button>
        }
    </div>)
}

export default ThemSwither