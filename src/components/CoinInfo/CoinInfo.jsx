import Alert from "../Alert/Alert"

import {  Line } from "react-chartjs-2"

import { CategoryScale } from "chart.js"
import  Chart  from "chart.js/auto"
Chart.register(CategoryScale)


// Presentor Layer
function CoinInfo({historicData, setDays, setCoinInterval, days, currency}) {
   
    const chartDays = [
        {
            label: "24 Hours",
            value: 1,
        }
        ,
        {
            label: "7 Days",
            value: 7,
        },
        {
            label: "30 Days",
            value: 30,
        },
        {
            label: "90 Days",
            value: 90,
        },
        {
            label: "1 Year",
            value: 365,
        },
    ]

    function handleDayChange(e) {
        console.log(e.target.options[e.target.selectedIndex].value);  
        const daysSelected = e.target.options[e.target.selectedIndex].value;
        if(daysSelected === 1) {
            setCoinInterval?.('');
        } else {
            setCoinInterval?.('daily');
        } 
        setDays?.(e.target.options[e.target.selectedIndex].value); 

        

    }

    
        if(!historicData) {
            return <Alert message="No Data Available" type="warning" />
        }
        return (
            <div
                className="flex flex-col items-center justify-center mt-6 p-6 w-full md:w-3/4"
                >
                <div className="h-[500px] w-full">
                <Line
                    data={{
                        labels:historicData.prices.map(coinPrice=>{
                            let date = new Date(coinPrice[0]); //Converting unix timestamp to date
                            let time = date.getHours()>12 ? `${date?.getHours()-12 }:${date.getMinutes()} PM` : `${date?.getHours()}:${date.getMinutes()} AM`;
                            return days === 1 ? time : date.toLocaleDateString();
                        }
                        ),
                        datasets:[

                            {
                             label: `Price (Past ${days} ${days ===1? 'Day':"Days"}) in ${currency?.toUpperCase()}`,
                             data:historicData.prices.map(coinPrice=>coinPrice[1]),   
                            }
                        ],

                        

                    }}
            

                    options={{
                        responsive:true,
                        maintainAspectRatio: false,
                        elements: {
                            point: {
                                radius: 0,
                            },
                        },
                        
                    }}
                    />
                </div>

                    <div className="flex justfy-content mt-5 w-full">
                        <select className="select select-primary w-full max-w-xs" onChange={handleDayChange}>
                        {chartDays.map((day, index)=>{
                            return (
                                <option selected={days === day.value} key={index} value={day.value} >{day.label}</option>
                            )
                        })}
                        </select>
                    </div>


                    

            </div>
        )
    
}
export default CoinInfo