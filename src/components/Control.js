import React from "react"
import PropTypes from 'prop-types'


export default class Control extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.onPlus}>+</button>
        <button onClick={this.props.onMinus}>-</button>
        <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
      </div>
    );
  }
}


Control.propTypes = {
  onPlus: PropTypes.func,
  onMinus: PropTypes.func,
  onRandomizeColor: PropTypes.func
}

Control.defaultProps = {
  onPlus: () => {},
  onMinus: () => {},
  onRandomizeColor: () => {}
}
