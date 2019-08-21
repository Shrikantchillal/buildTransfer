import React from 'react';
import * as constant from '../constant/constant'

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errMessage: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }
    onSubmit(e) {
        e.preventDefault();
        (this.state.username === constant.USERNAME && this.state.password === constant.PASSWORD) ? this.setState({validUser: true })  : this.setState({errMessage: 'You are not a valid user' })
    }

    render() {
        return(
            <div className='row'>
                <div className='col-md-3'>
                    <form onSubmit={this.onSubmit}>
                        <div>{this.state.validUser ? this.props.history.push('/replicationStatus') : <div className='error-message'>{this.state.errMessage}</div> }</div>
                        <div>
                            <label>Username:</label>
                            <input type="text" name="username" value={this.state.username} onChange={this.onChange} className='form-control' />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.onChange} className='form-control' />
                        </div>
                        <button type="submit" className='btn btn-primary mt-3'>Submit</button>
                    </form>
                </div>
                <div className='col-md-9'></div>
            </div>
        )
    }
}

export default SignUp;