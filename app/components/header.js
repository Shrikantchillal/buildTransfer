import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        })
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentWillMount() {
        clearInterval(this.timerId)
    }


    render() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return(        
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/" className='nav-link'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/replicationStatus" className='nav-link'>Replication Status</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/storageUtilization" className='nav-link'>Storage Utilization</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/routes" className='nav-link'>Routes</NavLink>
                        </li>
                    </ul>
                </div>
                <div className=''>
                {this.state.date.toLocaleDateString('en-US', options)}, {this.state.date.toLocaleTimeString()} 
                </div>
            </nav>
        )
    }
}

export default Header;