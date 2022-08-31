import React from 'react'

const ImageCard = ({image}) => {

    const tags= image.tags.split(',');

  return (
    <div className='card'> <img src={image.webformatURL} alt='loading..'></img>
    <div ><h3  className='main'>Photo by {image.user}</h3>
    
        <ul >
        <li>
        <strong>Views: </strong>
        {image.views}
        </li>
        <li>
            <strong>Downloads: </strong>
            {image.downloads}
        </li>
        <li>
            <strong>Likes: </strong>
            {image.likes}
        </li>
        </ul>
    </div>
    <div className='tags'>
        {tags.map((tag,index)=>(
            <span key={index} className='tags1'>#{tag}</span>
        ))}

    </div>
    </div>
    
    
    
  )
}

export default ImageCard;