import { connect } from 'react-redux'
import Daruma from './Daruma'

const mapStateToProps = (state) => {
  return {
    msg: state.daruma.toJS().msg
  }
}

const mapDispatchToProps = () => {
  return {}
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Daruma)

export default Container

