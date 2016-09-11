import React from 'react'
import ReactTooltip from 'react-tooltip'

const Daruma = ({ msg }) => {
  const mainStyle = {
    position: 'absolute',
    right: '5%',
    bottom: '10%',
    height: '10%',
  }
  const imgStyle = {
    height: '100%'
  }
  return (
    <div data-tip={msg} style={mainStyle}>
      <img style={imgStyle} src="/static/img/daruma.png" />
      <ReactTooltip place="top" effect="solid" />
    </div>
  )
}

export default Daruma
