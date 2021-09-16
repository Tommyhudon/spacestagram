import { useState } from "react"
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import './Image.css';
import { FaHandPointUp } from 'react-icons/fa';

const ImageList = props => {
  const [like, setLike] = useState(false);

  return (
    <div>
      {
        props.data.map((el) => (
          <div className= 'image-container fadeIn'>
            <span className='copyright'>{el.copyright}</span>
            <img src= {el.url} alt='Not found :(' ></img>
            <div className='like-icon' onClick={e => setLike(!like)}>
              {!like && 
                <FaRegHeart  />
              }
              {like && 
                <FaHeart  color='#ed4956'/>
              }
            </div>
            <p>{el.explanation}</p>
          </div>
        ))
      }
      {
        props.data.length === 0 &&
        <div>
          < FaHandPointUp className='finger-icon'/>
          <h3 className='no-image-text'>It seems there is no image for this date range. Try another range to see images !</h3>
        </div>
      }
    </div>  
  )
}

export default ImageList;