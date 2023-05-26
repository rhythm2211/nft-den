import React from 'react'
import './brandsIntegration.css'
const BrandsIntegration = () => {
  return (
    <div className="brands-integration">
        <h1 className="heading-gradient ">OUR PROUD PARTNERS</h1>
        <img className="logo" src={require('../assets/WalletConnect-Symbol.png')} alt="" />
        <img className="logo" src={require('../assets/horizontal_blue.png')} alt="" />
        <img className="logo" src={require('../assets/MetaMask-Logo.png')} alt="" />
        <img className="logo" src={require('../assets/safepal-logo-big.png')} alt="" />
    </div>
  )
}

export default BrandsIntegration
