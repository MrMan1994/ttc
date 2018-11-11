import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({children}) => (
    <div>
        <Header></Header>
        {children}
        <Footer></Footer>
    </div>
)

export default Layout