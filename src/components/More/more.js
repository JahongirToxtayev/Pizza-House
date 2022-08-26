import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function More() {
  const params=useParams().id
  const [FilterApi, setFilterApi] = useState({})

  const data=useSelector(state=>state)
  console.log(FilterApi,"moreman");
  
  useEffect(() => {
    
    let FilterData=data.filter(soz=>params==soz.id)
    setFilterApi(FilterData)
   
  }, [])
  

  return (
    <>
    <div className="more-div">
      
    </div>
    </>
  )
}

export default More