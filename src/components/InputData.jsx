import React, { useState } from 'react'

const InputData = (props) => {
  const [coordinates, setCoordinates] = useState({
    xAxis:'',
    yAxis:''
  })

  const handleInputChange = (event) => {
    setCoordinates((prevCoord) =>{
      return {
      ...prevCoord, 
      [event.target.name] : event.target.value
      };
    })
    console.log(coordinates);
  }

  const handleClick = () => {
    props.handleAddCoords(coordinates)
  }


  return (
    <div className='m-auto'>
      <input placeholder='X-Axis' name='xAxis' className='m-2 p-1' onChange={handleInputChange} value={coordinates.xAxis} />
      <input placeholder='Y-Axis' name='yAxis' className='m-2 p-1' onChange={handleInputChange} value={coordinates.yAxis} />
      <button type='button' className='btn btn-primary' onClick={handleClick} >Add Coordinates</button>
    </div>
  )
}

export default InputData