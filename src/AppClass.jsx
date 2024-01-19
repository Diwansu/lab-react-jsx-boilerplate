import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render () {
     const photos = this.imageData() 
     let imageArray=[] 
      
     photos.forEach(e => {
      imageArray.push (
        <img src = {e.img} alt={`num${e.id}`}></img>

      )
     }) 
       return (
         <div>
        <div>
          <h1 id='headline'>Kalvium Class Gallery </h1>
        </div>
         <div className ='imageDiv'>
           {imageArray}
         </div>
    

       </div>
     )
}
  }

