import { useState } from 'react';
import Button from "react-bootstrap/Button";

const ThemeSwither = () => {
    const [theme, setTheme] = useState('light');

    const switchTheme = () => {
        const htmlTag = document.getElementsByTagName('html')[0]; // Получаем тег <html>
        if (theme === 'light') {
            htmlTag.setAttribute('data-bs-theme', 'dark'); // Меняем параметр на 'dark'
            setTheme('dark'); // Обновляем состояние темы
        } else {
            htmlTag.setAttribute('data-bs-theme', 'light'); // Меняем параметр на 'light'
            setTheme('light'); // Обновляем состояние темы
        }
    };

    return (
        <>
            <Button variant={theme === 'light' ? "dark" : "light"} className="ms-2" onClick={switchTheme}>Switch Theme</Button>{' '}
        </>
    );
}

export default ThemeSwither;
