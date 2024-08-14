import React from 'react'

type Props = {
    imgSrc:string,
    title:string,
    user:string,
    date:string
}


function Art({imgSrc,title,user,date}:Props) {
  return (
    <div className='w-[300px] h-fit'>
        <img
        src={imgSrc}
        alt='art'
        />
        <p></p>
    </div>
  )
}

export default Art