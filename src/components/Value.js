import React from "react"
import PropTypes from 'prop-types'

export default class Value extends React.Component {

  render() {
    return (
      <div>
        <h2>{this.props.number}</h2>
      </div>
    );
  }
}

Value.propTypes = {
  number: PropTypes.number
}

Value.defaultProps = {
  number: -1
}
