import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import {Bar, Line } from 'react-chartjs-2';
import "../components/css/HomePage.css"
const HomePage =()=>{
    return(
        
        <div className="HomePage">
            <h1 className="shbztext">Sensex</h1>
            <div className="dataCard">
                <Line
                data={{
                    labels: [,"19Feb","20Feb","21Feb","22Feb","23Feb","24Feb"],
                    datasets:[
                        {
                            label: "Volume",
                            data:[72000,72500,73140,72750,73210,72575,72800]
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
                  stepSize: 500, // Adjust the step size to decrease the scale
                },
              },
            },
          }}
        />

      </div>
    </div>
  )
}

export default HomePage