import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickedLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  const onClickedHome = () => {
    if (Cookies.get('jwt_token') !== undefined) {
      const {history} = props
      console.log(props)
      history.replace('/home')
    }
  }
  const onClickedProducts = () => {
    if (Cookies.get('jwt_token') !== undefined) {
      const {history} = props
      console.log(props)
      history.replace('/products')
    }
  }
  const onClickedCart = () => {
    if (Cookies.get('jwt_token') !== undefined) {
      const {history} = props
      console.log(props)
      history.replace('/cart')
    }
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />

          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickedLogout}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-img"
            />
          </button>
        </div>

        <div className="nav-content nav-bar-large-container">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <ul className="nav-menu">
            <button
              type="button"
              className="nav-button"
              onClick={onClickedHome}
            >
              <li className="nav-menu-item">Home</li>
            </button>
            <button
              type="button"
              className="nav-button"
              onClick={onClickedProducts}
            >
              <li className="nav-menu-item">Products</li>
            </button>
            <button
              type="button"
              className="nav-button"
              onClick={onClickedCart}
            >
              <li className="nav-menu-item">Cart</li>
            </button>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickedLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <button type="button" className="nav-button" onClick={onClickedHome}>
            <li className="nav-menu-item-mobile">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-img"
              />
            </li>
          </button>
          <button
            type="button"
            className="nav-button"
            onClick={onClickedProducts}
          >
            <li className="nav-menu-item-mobile">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-img"
              />
            </li>
          </button>
          <button type="button" className="nav-button" onClick={onClickedCart}>
            <li className="nav-menu-item-mobile">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-img"
              />
            </li>
          </button>
        </ul>
      </div>
    </nav>
  )
}
export default withRouter(Header)
