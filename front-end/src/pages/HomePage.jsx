import React from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Features from "../components/Feature"
import Header from "../components/Header"
import MainDiv from "../components/mainDiv"
import img from "../assets/bot.jpg"
import { useNavigate } from "react-router-dom"

export function HomePage(){
      const navigate=useNavigate()
      return (<>
            <div className="fixed top-[590px] right-8 cursor-pointer bg-orange-200 rounded-full h-40 w-40 animate-bounce"
                  onClick={()=>navigate('/chatbot')}
            >
                  <img src={img} alt="" className="h-40" />
            </div>
            <div className="overflow-x-hidden">
                  <Header/>
                  <MainDiv/>
                  <Features/>
                  <About/>
                  <Contact/>
            </div>
      </>
      )
}