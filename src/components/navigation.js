import React from 'react'
import logo from '../images/logo.jpg'
import { Link } from 'gatsby'

const Navigation = ({ close }) => (
  <div className="menu">
    <ul>
        <li onClick={close}>{<Link to="/"><img src={logo} width={'60%'} alt="logo not found"/></Link>}</li>
        <li onClick={close}><Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link></li>
    </ul>
  </div>
)

export default Navigation