import React from 'react'
import ReactTooltip from 'react-tooltip'

const Daruma = () => {
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
    <div data-tip="give me those cummies" style={mainStyle}>
      <img style={imgStyle} src="/static/img/daruma.png" />
      <ReactTooltip place="top" effect="solid" />
    </div>
  )
}

export default Daruma
