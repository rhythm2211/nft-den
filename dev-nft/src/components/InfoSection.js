import React from 'react'
import './InfoSection.css'
import { INFO_ITEMS } from '../data/infoItems'
import InfoItem from './InfoItem'
const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="is-heading">
        <span className="heading-gradient heading"> Create and sell your NFTs</span>
      </div>
      <div className="is-items-container">
        {INFO_ITEMS.map((_infoItem)=><InfoItem item={_infoItem}/>)}
      </div>
    </div>
  )
}

export default InfoSection
