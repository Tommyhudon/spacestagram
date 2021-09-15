import { useEffect, useState } from "react"
import './Image.css'
import Loader from '../loader/loader';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

const Image = props => {
  const [imageData, setImageData] = useState({ url: '', copyright: '', explanation: '' });
  const [loading, setLoading] = useState(true);
  const [like, setLike] = useState(false);

  useEffect(() => {
    setLoading(true);
    setLike(false);
    const date =  props.date.toISOString().split('T')[0];
    fetch(`https://api.nasa.gov/planetary/apod?api_key=NxBTb2lfZdSqyhuNuaLB67eHs7qlGPGeY1r6wbzR&date=${date}`)
      .then((res) => {
        return res.json();
      }).then((data) => {
        setImageData(data);
        setTimeout(function(){ setLoading(false);}, 6000);
        
      });
  }, [props]);

  return (
    <div className='image-wrapper'>
      {!loading &&
        <div className= 'image-container fadeIn'>
          <span className='copyright'>{imageData.copyright}</span>
          <img src= {imageData.url} alt='Image not found :(' ></img>
          <div className='like-icon' onClick={e => setLike(!like)}>
            {!like && 
              <FaRegHeart  />
            }
            {like && 
              <FaHeart  color='#ed4956'/>
            }
          </div>
          <p>{imageData.explanation}</p>
        </div>  
      }
      {loading &&
        <Loader></Loader>
      }
    </div>
  )
}

export default Image;