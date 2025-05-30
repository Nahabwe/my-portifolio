import { useEffect, useState } from "react"

const useDarkThem =()=>{
const [theme,setTheme]=useState<string>(()=>{
    if(typeof window !== 'undefined'){
        return localStorage.getItem('theme') || 'light';
    }
    return 'light'
})


useEffect(()=>{
    const root=window.document.documentElement;

    if(theme==='dark'){
        root.classList.add('dark')
    }else{
        root.classList.remove('dark')
    }
    localStorage.setItem('theme',theme)
},[theme])

const toggleTheme=()=>{
    setTheme((prev)=>(prev==='dark'? 'light' : 'dark'))
}
return {theme, toggleTheme}
}

export default useDarkThem;