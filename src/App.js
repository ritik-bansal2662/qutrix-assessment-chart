import { useState, useEffect} from 'react'
import Chart from "react-apexcharts";
import InputData from './components/InputData';

function App() {

  const [chartData, setChartData] = useState({
    xAxis:[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    yAxis:[30, 40, 45, 50, 49, 60, 70, 91, 80]
  })

  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: chartData.xAxis
      }
    },
    series: [
      {
        name: "series-1",
        data: chartData.xAxis
      }
    ]
  })

  useEffect( () => {
    setState( (prevState) => {
      return {
      options: {
        ...prevState.options.chart,
        xaxis: {
          categories: chartData.xAxis
        }
      },
      series: [
        {
          ...prevState.series.name,
          data: chartData.yAxis
        }
      ]
  }})
  }, [chartData])
  
  // useCallback()
  // react table

  const getInputCoords = (coords) => {
    if(coords.xAxis < chartData.xAxis[chartData.xAxis.length-1]) {
      alert('Enter a xAxis value greater than' + chartData.xAxis[chartData.xAxis.length-1])
    } else {
      setChartData( (prevData) => {
        return {
          xAxis : [...prevData.xAxis, coords.xAxis],
          yAxis : [...prevData.yAxis, coords.yAxis]
        }
      })
    }
  }

  return (
    <div className="App">
      <h1>Qutrix</h1>
      <hr />
      <div className='row'>
        <div>
          <InputData handleAddCoords = {getInputCoords} />
        </div>
        <div className='col-5 m-auto border border-dark pr-4'>
          <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="500"
            />
        </div>
      </div>
    </div>
  );
}

export default App;
