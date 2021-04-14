import React from 'react'
import Themap from './Themap.js'
import { connect } from 'react-redux'
import { fetchLocation } from '../../Redux/actions/Locationaction'
import LocationTabel from '../LocationTabel/LocationTabel'
import Surfer from '../../Assets/Surfer.png'
import Bg from '../../Assets/Bg.png'

import '../../Stylesheet/App.css'
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
                <div className='topPart'>

                    <div className='surferBg'>
                        <img src={Bg} alt="" className='Bg' />

                    </div>
                    <div className='surfer'>
                        <img src={Surfer} alt="" />

                    </div>
                    <div className='text'>
                        <div className='title'>
                            <h2>IN NEED OF WIND</h2>
                        </div>

                        <p>We offer you the newest and most usefull app that
                        any kitesurfer should use when they are in ‘the mood’.
                        You just have to log in and look for a location in your vecinity to
                        find exactly when and where are the best conditions for your
                        passion.</p>
                    </div>
                </div>
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







