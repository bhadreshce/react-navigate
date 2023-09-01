import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Product = () => {
    const [data, setData] = useState({})
    const { id } = useParams()
useEffect(() => {
  console.log(id);
    axios.get(`https://fakestoreapi.com/products/${id}`).then((result) => { 
        console.log(result.data);
        setData(result.data)
    })
}, [])
    
    
    
    

    
    return <div>
        <h1>
            <img src={data.image} alt="" />
            <h1>{data.title}</h1>
            <span>{ data.price}</span>
      </h1>
  </div>
}

export default Product
