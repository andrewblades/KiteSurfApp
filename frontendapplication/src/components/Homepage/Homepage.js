import React from 'react'
import Themap from './Themap.js'
import { connect } from 'react-redux'
import { fetchLocation } from '../../Redux/actions/Locationaction'
import LocationTabel from '../LocationTabel/LocationTabel'

class Homepage extends React.Component {

    componentDidMount() {
        const { fetchLocation } = this.props;
        fetchLocation();
    }


    render() {

        const { location } = this.props
        console.log(location)
        if (location === null) {
            return (
                <div>loading</div>
            )
        }
        return (
            <div>
                <Themap data={location} />
                <LocationTabel location={location} />
            </div>
        )
    }
}



const mapStateToProps = state => ({
    location: state.location.location
})

const mapDispatchToProps = dispatch => ({
    fetchLocation: () => dispatch(fetchLocation())
})




export default connect(mapStateToProps, mapDispatchToProps)(Homepage)







