import useDarkThem from '../context/useDarkThem'
import { FaMoon, FaSun } from 'react-icons/fa'

const ToggleThemeButton = () => {
    const {theme,toggleTheme}=useDarkThem()

  return (
    <button onClick={toggleTheme} className='text-2xl p-2'>
{theme=== 'dark' ? <FaSun className='text-yellow-400'/> : <FaMoon className='text-yellow-400'/>}
    </button>
  )
}

export default ToggleThemeButton