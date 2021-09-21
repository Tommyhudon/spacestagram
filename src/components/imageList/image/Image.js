import { useState } from "react"
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import './Image.css';
import { FaHandPointUp } from 'react-icons/fa';

const ImageList = props => {
  const [like, setLike] = useState(false);

  return (
    <div>
      <div className= 'image-container fadeIn'>
        <span className='copyright-text'>{props.data.copyright}</span>
        {props.data.media_type === 'video' &&
          <iframe title='video' className='media' src={props.data.url} alt='video not found :('></iframe>
        }
        {props.data.media_type === 'image' &&
          <img className='media' src= {props.data.url} alt='Not found :(' ></img>
        }
        <div>
          <div className='like-icon' onClick={e => setLike(!like)}>
            {!like && 
              <FaRegHeart  />
            }
            {like && 
              <FaHeart  color='#ed4956'/>
            }
          </div>
          <p className='image-explanation'>{props.data.explanation}</p>
          <p className='date-text'>{props.data.date}</p>
        </div>
        
      </div>
        
      
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