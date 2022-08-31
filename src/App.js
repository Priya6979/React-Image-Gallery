import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import './styles.css'

function App() {
  const[images,setImages]=useState([])
  const[isloading,setIsloading]=useState(true)
  const[term,setTerm]=useState("cat")

  useEffect(()=>{
    axios.get(`https://pixabay.com/api/?key=29536220-90609b5fadda99b9a0981664f&q=${term}&image_type=photo&pretty=true`)
    .then(res=>{
      setImages(res.data)
      setIsloading(false)
    })
    .catch(error=>{
      console.log('Error',error)
    })

  },[term])
  return (
    <div className="App">
      <Header/>
      <ImageSearch searchText={text => setTerm(text)}/>
      {!isloading && images.hits.length===0 && <h1 className='message'>No Images Found</h1>}
      <div className='flex-main'>
         {isloading ? <h1>Loading...</h1>:( 
      images && images?.hits?.map((image)=>{
        return(
          <div className='main'>  <ImageCard key={image.id} image={image} /></div>
        
         
      )
      })
     )}</div>
     
    

     <Footer/>
    </div>
  );
}

export default App;
