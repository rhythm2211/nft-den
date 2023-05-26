/* eslint-disable react/jsx-no-undef */
import React from 'react'
import './TrendingNfts.css'
import Slider from 'react-slick/lib/slider'
import { TRENDING_NFTS } from '../data/trendingNfts';
import TrendingCard from './TrendingCard';
import Button from '../common/Button/Button';
const settings = {
    slidesToShow:3,
    slidesTOScroll:1,
    autoplay:true,
    speed:500,
    arrows:false
};
const TrendingNfts = () => {
  return (
    <div className="trending-nfts">
        <div className="tn-title">
        <div className="tn-r-bg-blob"></div>
            <span className="heading-gradient">TRENDING NFTs</span>
            
        </div>
      <Slider {...settings}>
        {
            TRENDING_NFTS.map((_nft)=><TrendingCard nft={_nft}/>)
        }
      </Slider>
      
      <div className="tn-btn absolute-center">
        <Button btnText="SEE MORE" type="Secondary" cutomClass="seemore-btn" / >
      </div>
    </div>
  )
}

export default TrendingNfts
