import ImageList from '../image/ImageList'
import DatePicker from "react-datepicker";
import { useState } from "react"
import "react-datepicker/dist/react-datepicker.css";
import './wrapper.css'

function Wrapper() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <header className='header'>
        <h3 className='app-title'>Spacestagram</h3>
        <div className='date-picker-container'>
          <DatePicker 
            className = 'date-picker'
            selected={startDate} 
            onChange={(dates) => {
              const [start, end] = dates;
              setStartDate(start);
              setEndDate(end);
            }}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            popperPlacement="top"
            dateFormat="yyyy/MM/dd"
            filterDate = {(date) => {
              return new Date() > date;
            }}
          />
        </div>
      </header>
      <ImageList date = {startDate} endDate = {endDate}></ImageList>
    </div>
  )
}

export default Wrapper;