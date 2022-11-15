import React from 'react'

function SingleMessage(props) {
  return (
    <div>
        <h6 className='UserName'>{props.item.username}</h6>
        <p className='chatItem'>{props.item.chat}</p>
    </div>
  )
}

export default SingleMessage