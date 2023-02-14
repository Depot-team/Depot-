import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import List from './components/List.jsx'
import Create from './components/Create.jsx'
import axios from 'axios'
import Filter from './components/Filter.jsx'


const App = () => {
  const [travels, setTravels] = useState([])
  const [add,setAdd]=useState(false)
  
  useEffect(() => {
    $.get( '/api/travel')
    .then((data) => {
      console.log(data) 
      setTravels(data);
     }).catch(err => {
       console.log(err);
     })   
  }, [add])

  let dataSearch = (value)=>{
   const newtravels= travels.filter(e=>(e.town.toLowerCase()).includes(value.toLowerCase()))
    setTravels(newtravels)
  }
  

  const createTravel = (body) => {
    console.log("body",body);
    axios
    .post('/api/travel', body)
     .then((result) => {
      console.log(result);
      setAdd(!add)
    }).catch(err => {
      console.log(err);
    })
  }

  const deleteTravel = (id) => {
    axios
    .delete(`/api/travel/${id}`)
     .then((result) => {
     console.log(result) 
     setAdd(!add);
    }).catch(err => {
      console.log(err);
    })
  }

  const updateTravel = (id,body) => {
    axios
     .put(`/api/travel/${id}`, body)
     .then((result) => {
       console.log(result) , setAdd(!add);
      }).catch(err => {
        console.log(err);
      })
   }
 

  return (
    <div id="header">
      <img id ="tun" src="https://www.heytunisia.com/wp-content/uploads/2021/09/Logo-hey-Ang_03-2.png"/>
      <Create create={createTravel}/>
      <Filter dataFiltred={dataSearch}/>
      <List travels={travels} deleted={deleteTravel} updated={updateTravel} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
