import React, { Component } from 'react'
import IndividualFriend from './IndividualFriend'
import '../Styles/InstantMessangeer.css'
import MessageBox from './MessageBox'

export class InstantMessageer extends Component {
    state = {
        instaBoxVisable: false,
        id: 0
    }

    instaBoxVisable = (id) => this.setState({ instaBoxVisable: true, id: id })

    removeMessageBox = () => this.setState({ instaBoxVisable: false })

    render() {
        return (
            <div className='aim-box'>
                <div className='instant-message-div'>
                    <div className='ui row'>
                    {this.props.friends.map(friend => <IndividualFriend instaBoxVisable={this.instaBoxVisable} key={friend.id} {...friend} users={this.props.users} instantMessages={this.props.instantMesages} loggedInUser={this.props.loggedInUser} />)}
                    </div>
                </div>
                {this.state.instaBoxVisable ? <div><MessageBox removeMessageBox={this.removeMessageBox} id={this.state.id} /></div> : null }
            </div>
        )
    }
}

export default InstantMessageer
