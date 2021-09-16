import { useEffect, useState } from "react"
import './ImageList.css'
import Loader from '../loader/loader';
import Image from './Image'

const ImageList = props => {
  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (!props.endDate && !props.startDate) return ;;
    setLoading(true);
    const startDate =  props.date.toISOString().split('T')[0];
    const endDate =  props.endDate.toISOString().split('T')[0];
    fetch(`https://api.nasa.gov/planetary/apod?api_key=NxBTb2lfZdSqyhuNuaLB67eHs7qlGPGeY1r6wbzR&start_date=${startDate}&end_date=${endDate}`)
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
        imageData.map((image, key) => (
          <Image data={image} key={key}></Image>
        ))
      }
      {loading &&
        <Loader></Loader>
      }
    </div>
  )
}

export default ImageList;