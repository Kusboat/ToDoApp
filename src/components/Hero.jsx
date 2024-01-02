import {useState} from 'react'
import {BsMoonFill, BsSun} from 'react-icons/bs'
import { GetValue } from '../components/ThemeContext'


const Hero = ({addHandler}) => {
    const [item,setItem]=useState("")
    const {dark, themeHandler} = GetValue()


    const submitHandler = e => {
        e.preventDefault();
        addHandler(item);
        setItem('')
    }

    console.log(dark);

  return (
    <div className='hero'>
        <div className='formContent'>
            <div className='hdg'>
                <h1>TO DO</h1>
                {dark ? <BsMoonFill onClick={themeHandler} className='bsm'/> : <BsSun onClick={themeHandler} className='bsm'/>}
            </div>
            
            <form className={`${dark ? '' : 'darkform'}`} onSubmit={submitHandler}>
                <input 
                required
                maxLength={50}
                value = {item}
                onChange={(e)=>setItem(e.target.value)}
                className='inputField' type="text" placeholder='Create a new ToDo item'/>
                <button className='add' type='submit'>Add</button>
            </form>
        </div>
        
    </div>
  )
}

export default Hero