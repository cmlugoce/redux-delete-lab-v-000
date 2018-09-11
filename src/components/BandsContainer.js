import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
        const renderBands = this.props.bands.map((band) => <Band deleteBand={this.props.deleteBand} key={band.id} id={band.id} text={band.bandName} />)

    return (
      <div>
        <BandInput addBand={this.props.addBand}/>

      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
