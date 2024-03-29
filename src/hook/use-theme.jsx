import {useLayoutEffect, useState} from "react";

const idDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = idDarkTheme ? 'dark' : 'light'

export const useTheme = () => {

    setTimeout(() => {
        document.getElementById('body_switch_theme').style.transition = '500ms'
    }, 1000)

    const [theme, setTheme] = useState(localStorage.getItem('app-theme') || defaultTheme)

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('app-theme', theme)
    }, [theme]);


    return {theme, setTheme}
}