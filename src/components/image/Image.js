import { useState } from "react"
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

const ImageList = props => {
  const [like, setLike] = useState(false);

  return(
    <div>
      {
        props.data.map((image) => (
          <div className= 'image-container fadeIn'>
            <span className='copyright'>{image.copyright}</span>
            <img src= {image.url} alt='Not found :(' ></img>
            <div className='like-icon' onClick={e => setLike(!like)}>
              {!like && 
                <FaRegHeart  />
              }
              {like && 
                <FaHeart  color='#ed4956'/>
              }
            </div>
            <p>{image.explanation}</p>
          </div>
        ))
      }
    </div>  
  )
}

export default ImageList;