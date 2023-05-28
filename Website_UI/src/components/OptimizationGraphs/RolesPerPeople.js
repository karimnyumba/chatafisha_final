import React from 'react'
import Chart from 'react-apexcharts'
const RolesPerPeople = ({series, labels}) => {
 const generateRandomColors = (num) => {
   const colors = []
   for (let i = 0; i < num; i++) {
     colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
   }
   return colors
 }
 
 const options = {
   labels: labels,
   colors: generateRandomColors(labels.length),
   plotOptions: {
     pie: {
       offsetY: 10, // Increase the label offset from the center
       dataLabels: {
         offset: 1, // Increase the label offset from the slices
       },
     },
   },
 }
  return (
    <div>
     <Chart options={options} series={series} type='pie'/>
    </div>
  )
}

export default RolesPerPeople