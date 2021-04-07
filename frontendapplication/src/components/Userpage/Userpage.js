import React from 'react'
import { connect } from 'react-redux'
import { getUser } from '../../Redux/actions/UserAction'
import User from './User'
import '../../Stylesheet/App.css'

class Userpage extends React.Component {


    componentDidMount() {
        const { getUser } = this.props
        getUser();
    }

    render() {

        const { user } = this.props
        console.log(user)
        if (user === null) {
            return (
                <div>loading</div>
            )
        }

        return (
            <div className='cardsContainer'>
                {user.map((u) =>
                    <User data={u} />
                )}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.user
})

const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Userpage)
