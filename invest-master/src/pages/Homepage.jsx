import React from "react";
import { Chart as ChartJS} from "chart.js/auto";
import { Bar, Line } from 'react-chartjs-2';
import "../components/css/HomePage.css"
import TopStock from "../components/topStocks";
import Footer from "../components/Footer";



const HomePage = () => {
  return (

    <div className="HomePage">
      <h1 className="shbztext">Sensex</h1>
      <div className="dataCard">
        <Line
          data={{
            labels: [,"12Feb", "13Feb", "14Feb", "15Feb", "16Feb", "17Feb" ,"18Feb", "19Feb", "21Feb", "22Feb", "23Feb", "24Feb"],
            datasets: [
              {
                label: "Price",
                data: [,72050,72300,72125,72227,71959,72600, 72827, 73140, 72750, 73510, 72875, 72800]
              }
            ]
          }}
          options={{
            scales: {
              x: {
                // Optionally, you can configure the X-axis scale here
              },
              y: {
                beginAtZero: false, // Start the Y-axis from zero
                ticks: {
                  stepSize: 200, // Adjust the step size to decrease the scale
                },
              },
            },
          }}
        />
      </div>
      <TopStock/>
      <Footer/>
    </div>
  )
}

export default HomePage