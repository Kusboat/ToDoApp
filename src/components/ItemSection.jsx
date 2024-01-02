//import React from 'react'
import {MdDeleteForever, MdCheck, MdCancel} from 'react-icons/md'

const ItemSection = ({data, delHandler, clickHandler}) => {
  
  return (
    <div className='items'>
        <div  className='item'>
            { data.completed ? <MdCheck onClick={()=>clickHandler(data.id)} className='mdk'/>
            :<MdCancel onClick={()=>clickHandler(data.id)} className='mdc'/>} 
            <p className={`${data.completed && 'strike'}`} >{data.title}</p>
        </div>
        <MdDeleteForever className='mdf' onClick={()=>delHandler(data.id)} />
    </div>
  )
}

export default ItemSection