//import React from 'react'

const FilterSection = ({filterType}) => {

  return (
    <div>
        <button className='filterType' onClick={()=>filterType("all")}>All</button>
        <button className='filterType' onClick={()=>filterType("active")}>Active</button>
        <button className='filterType' onClick={()=>filterType("completed")}>Completed</button>
    </div>
  )
}

export default FilterSection