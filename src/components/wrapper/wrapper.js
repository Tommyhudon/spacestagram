import Image from '../image/Image'
import DatePicker from "react-datepicker";
import { useState } from "react"
import "react-datepicker/dist/react-datepicker.css";
import './wrapper.css'

function Wrapper() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <header className='header'>
        <h3 className='app-title'>Spacestagram</h3>
        <div>
          <DatePicker 
            className = 'date-picker'
            selected={startDate} 
            onChange={(date) => setStartDate(date)} 
            popperPlacement="top"
            dateFormat="yyyy/MM/dd"
            filterDate = {(date) => {
              return new Date() > date;
            }}
          />
        </div>
      </header>
      <Image date = {startDate}></Image>
    </div>
  )
}

export default Wrapper;