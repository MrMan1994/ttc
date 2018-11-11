import React from 'react'
import Popup from 'reactjs-popup'
import Navigation from './navigation'
import BurgerIcon from './burgerIcon'
import './header.css'
import Link from 'gatsby-link'
import headerLine from '../images/headerLine.png'
import logo from '../images/logo.jpg'

const burgerContentStyle = {
    background: "rgba(255,255,255,0)",
    width: "15%",
    border: "none"
}

const HeaderImage = ({src, alt, height, width, style}) => (
    <div>
        <img height={height} width={width} style={style} src={src} alt={alt} />
    </div>
)

const Burger = () => (
    <div>
        <Popup
            modal
            overlayStyle={{ background: "rgba(0,0,0,0.85" }}
            contentStyle={burgerContentStyle}
            closeOnDocumentClick={true}
            trigger={open => <BurgerIcon open={open} />}
            >
            {close => <Navigation close={close} />}
        </Popup>
    </div>
)

class Header extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value: null,
        }
    }
    render(){
        return (
            <div style={{ marginTop: 40, textAlign: 'center' }}>
                <Burger></Burger>
                <div style={{ position: 'relative', textAlign: 'center' }}>
                    <HeaderImage height='178' width='231' style={{ float: 'left', marginLeft: 100, marginRight: -200 }} src={logo} alt="logo not found"></HeaderImage>
                    <h1>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/">1. TTC KÖLN</Link>
                    </h1>
                </div>
                <HeaderImage src={headerLine} alt="image not found"></HeaderImage>
            </div>
        )
    }
}

export default Header