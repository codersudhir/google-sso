
"use client"
import React from 'react'
import '../Home/Homepage.css';
import { Chart } from "react-google-charts";
import Carousel from './Carousel';
import Header from '../Header/Header';
import Image from 'next/image';
interface Props {
    profile: any
    provider: string
    onLogout: () => void
  }


const Dashboard = () => {
  const  user =[{firstname:"sudhir ",lastname:"Nandane",img:"https://codersudhir.github.io/static/media/dp.23e2591d6d9decad1e42.jpg"}]
  
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7], // CSS-style declaration
  ];
  
  const options = {
    title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false,
  };
  return (
    <>
    {/* this header i used only in dashbaord page but in main project heder is used only in layout page  */}
    <Header/>
    <div>

    <div style={{display:"flex",gap:"10%"}} >
      <div >
       {user.map((value,index)=>{
        return (
            < span key={index} style={{display:'flex',gap:"20px",color:'white'}}>
            <Image src={value.img} width={100} height={100}  alt={value.lastname} />
            <p>{value.firstname}</p>
            <p>{value.lastname}</p>
            </span>
        )
       })}
      </div>
      <div>
      <Chart
      chartType="PieChart"
      width="100%"
      height="200px"
      data={data}
      options={options}
    />
      </div>
     
    </div>
    {/* this is carousel component due less time avilability i am ot able to focus on css part */}
   <Carousel/>
  </div></>
  )
}

export default Dashboard
