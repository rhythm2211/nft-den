import React from 'react'
import './Topfold.css'
import Button from '../common/Button/Button'
const Topfold = () => {
  return (
      <div className='topfold absolute-center'>
        <div className="tf-left">
            <div className="tf-heading">
                Discover collect, & sell <br/>
                <span className="heading-gradient">Extraordinary</span> NFTs
            </div>
            <div className="tf-description">
            The leading NFT Marketplace offering multichain platform <br /> to next-gen digital creators.Discover the best NFTS.
            </div>
            <div className="tf-left-btns">
            <Button btnType="PRIMARY" btnText='EXPLORE'/>
            <Button btnType="SECONDARY" btnText='CREATE' customClass="tf-left-secondary-btn"/>
            </div>
            <div className="tf-left-infoStats">
                <p><span className='highlight heading-gradient'>200K+ </span> Collections</p>  
                <p><span className='highlight heading-gradient'>10K+ </span> Artists</p>
                <p><span className='highligh  heading-gradient'>500K+</span> Communities</p>
            </div>
           </div>
          
        <div className="tf-right">
            <div className="tf-r-bg-blob"></div>
             <div className="tf-right-diamond">
                <div className="tf-r-diamond-item absolute center">
                    <img className="tf-r-diamond-img" alt="diamond-banner" src="https://i.seadn.io/gcs/files/75cb7bfce5709f8e5b638c540645b31a.gif?auto=format&dpr=1&h=500" />
                </div>
                <div className="tf-r-diamond-item absolute center">
                    <img className="tf-r-diamond-img" alt="diamond-banner" src="https://i.seadn.io/gae/YUUUS4ETrmdv4C2DVjHHp7bM7iSnjikIJJcWfVA4vCwh9ZEtoqpdk45_zoOFrx-DQlXaKzr9acrEza626AS64g1ueupRgOn1o-1GFg?auto=format&dpr=1&w=512" />
                </div>
                <div className="tf-r-diamond-item absolute center">
                    <img className="tf-r-diamond-img" alt="diamond-banner" src="https://i.seadn.io/gae/dgYhSyJOWxqXsyaFLV6aQYX6Z310vkEUiq6R1JMfhIPbeAn7R-7puC6P583UdGCfhfpB7pzqTztRSSbfwl8aFhcna1LoyQfJ7qz26g?auto=format&dpr=1&w=512" />
                    </div>
                <div className="tf-r-diamond-item absolute center">
                    <img className="tf-r-diamond-img" alt="diamond-banner" src="https://i.seadn.io/gcs/files/3f4264edc881f743f9d7d80d8c051cd1.gif?auto=format&dpr=1&h=500" />
                </div>
             </div>
        </div>
      </div>
  )
}

export default Topfold
