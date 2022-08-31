import React, { useState } from 'react'

const ImageSearch = ({searchText}) => {
  
    const[text,setText]=useState('')

    const OnSubmitHandler =(e)=>{
        e.preventDefault()
        searchText(text)

    }

  return (
    <div className='search'>
        <form className='search-box' onSubmit={OnSubmitHandler}>
            <input onChange={e=> setText(e.target.value)} type="text" placeholder='Search Image'></input>
            <button type="Submit">Submit</button>
        </form>
    </div>
  )
}

export default ImageSearch