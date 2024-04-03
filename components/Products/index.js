// Write your JS code here
import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Products = props => {
  if (Cookies.get('jwt_token') === undefined) {
    return <Redirect to="/login" />
  }
  console.log(props)
  return (
    <div className="product-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
        className="product-img"
      />
    </div>
  )
}
export default withRouter(Products)
