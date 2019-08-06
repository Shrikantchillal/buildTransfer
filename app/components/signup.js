import React from 'react';
import * as contant from '../constant/contant'

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''        
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            validUser: false
        })        
    }
    onSubmit(e) {
        e.preventDefault();        
        (this.state.username === contant.username && this.state.password === contant.password) ? this.setState({validUser: true })  : null
    }

    render() {
        return(
            <div className='row'>
                <div className='col-md-3'>
                    <form onSubmit={this.onSubmit}>
                        <div>{this.state.validUser ? this.props.history.push('/replicationStatus') : <div className='error-message'>You are not a valid User</div> }</div>
                        <div>
                            <label>Username:</label>
                            <input type="text" name="username" value={this.state.username} onChange={this.onChange} className='form-control' />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.onChange} className='form-control' />
                        </div>
                        <button type="submit" className='btn btn-primary'>Submit</button>
                    </form>
                </div>
                <div className='col-md-9'></div>
            </div>
        )
    }
}

export default SignUp;