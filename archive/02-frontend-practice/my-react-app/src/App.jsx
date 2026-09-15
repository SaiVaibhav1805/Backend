import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const[jokes,setJokes]=useState([]);
  useEffect(()=>{
    axios.get("/api/jokes")
      .then((response)=>{
        setJokes(response.data);
      })
      .catch((error)=>{
        console.error("Error fetching jokes:", error);
      });
  }, []);

  return (
    
      <div>

        <h3>Jokes:</h3>
        <p>Here are some jokes for you:</p>
        <h2>{jokes.length}</h2>

        
          {jokes.map((joke,idx)=>(
            <div key={joke.id}>
              <p>{joke.text}</p>
            </div>
          ))}
        
        </div>
  )
}

export default App;
