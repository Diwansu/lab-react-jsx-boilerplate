import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

function App() {
     const photos = imageData() 
     let imageArray=[] 
      
     photos.forEach(e => {
      imageArray.push (
        <img src = {e.img} alt={`num${e.id}`}></img>

      )
     }) 
       return (
         <div>
        <div>
          <h1 id='headline'>Kalvium  functional Gallery </h1>
        </div>
         <div className ='imageDiv'>
           {imageArray}
         </div>
    

       </div>
     )
}

export default App;
