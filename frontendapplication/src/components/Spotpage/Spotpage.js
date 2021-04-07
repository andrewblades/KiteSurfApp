import React from 'react'

import { connect } from 'react-redux'
import { fetchLocation } from '../../Redux/actions/Locationaction'

import Spot from './Spot'
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
            <div className='spotCardsContainer'>
                {location.map((u) =>
                    <Spot data={u} />
                )}
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

