import React from 'react'
import ReactTooltip from 'react-tooltip'

const propTypes = {
  msg: React.PropTypes.string,
  clearDaruma: React.PropTypes.func
}

class Daruma extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.msg) {
      ReactTooltip.show()
      setTimeout(() => {
        this.props.clearDaruma()
      }, 3000)
    }
  }
  render() {
    const mainStyle = {
      position: 'absolute',
      right: '5%',
      bottom: '10%',
      height: '10%',
    }
    const imgStyle = {
      height: '100%'
    }
    const message = this.props.msg ? this.props.msg : 'cummies'
    return (
      <div data-tip={message} style={mainStyle}>
        <img style={imgStyle} src="/static/img/daruma.png" />
        <ReactTooltip place="top" effect="solid" defaultVisible />
      </div>
    )
  }
}

Daruma.propTypes = propTypes;

export default Daruma
