import logo from './logo.svg'
import './App.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function App() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((result) => {
      console.log(result.data)
      setProduct(result.data)
    })
  }, [])

  return (
    <div className=" d-flex flex-wrap">
      {product.map((prd) => {
        return (
          <div className="card" style={{ width: '200px' }}>
            <img
              height={'100px'}
              width={'100px'}
              className="card-img-top"
              src={prd.image}
              alt="Card image cap"
            />
            <div className="card-body">
              <span className="card-title">{prd.title.slice(0, 30)}</span>

              <Link to={`product/${prd.id}`} className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App
