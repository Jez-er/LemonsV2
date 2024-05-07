import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const nav = useNavigate();

    const handleAuthClick = () => {
        nav('/auth');
    };
    const handleAdminClick = () => {
        nav('/admin');
    };

    return (
        <div>
            <button onClick={handleAuthClick}>Авторизация</button>
            <button onClick={handleAdminClick}>Админка</button>
        </div>
    );
};

export { MainPage };