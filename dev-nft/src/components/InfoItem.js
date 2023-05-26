import React from 'react'
import "./InfoItem.css"
const InfoItem = (props) => {
    const {item}= props;
  return (
    <div className="info-item absolute-center">
      <img src={item.icon} alt={item.section_title} className="ii-icon" />
      <div className="ii-title">{item.section_title}</div>
      <div className="ii-description">{item.description}</div>
    </div>
  )
}

export default InfoItem
