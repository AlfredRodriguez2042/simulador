import React from 'react'

const Buttons = ({content,color}) => (
    <button type="submit" className={` btn ${color}`}>
        {content}
    </button>
)
    

export default Buttons

export const ButtonLink = ({url, color, content})=>(
    <a href={url} className={`btn ${color}`}>
      {content}
    </a>
)
