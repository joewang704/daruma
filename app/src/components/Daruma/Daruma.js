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
  const message = msg ? msg : 'cummies'
  return (
    <div data-tip={message} style={mainStyle}>
      <img style={imgStyle} src="/static/img/daruma.png" />
      <ReactTooltip place="top" effect="solid" />
    </div>
  )
}

export default Daruma
