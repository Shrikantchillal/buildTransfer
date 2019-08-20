import React from 'react';
import Axios from 'axios';

class Routes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            masterSlaveActive: [],
            masterSlavePassive: []
        }
    }
    componentWillMount() {
        const apiUrl = 'http://localhost:3000';
        this.getActiveRoutes(apiUrl);
        this.getPassiveRoutes(apiUrl)
    }
    getActiveRoutes(apiUrl) {
        Axios.get(apiUrl + '/masterSlaveActive')
        .then(res => {
            console.log('masterSlaveActive', res.data);
            this.setState({masterSlaveActive: res.data});
        })
    }
    getPassiveRoutes(apiUrl) {
        Axios.get(apiUrl + '/masterSlavePassive')
        .then(res => {
            console.log('masterSlavePassive', res.data);
            this.setState({masterSlavePassive: res.data});
        })
    }

    render() {
        return(
            <div>
                <h3 class="pt-3 mb-3">Primary Data route table</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className="text-center">Data Route</th>
                            <th className="text-center" colspan="3">Servers</th>
                            <th className="text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.masterSlaveActive.map((data, index) => (
                            <tr key={index}>
                                <td width="20%">{data.master_location} to {data.slave_location}</td>
                                <td width="26%">
                                {data.master}
                                </td> 
                                <td width="8%">
                                    -->
                                </td>
                                <td width="26%">
                                    {data.slave}
                                </td>
                                <td className="text-center" width="20%">{data.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                <h3 class="mt-4 mb-3">Secondary Data route table</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className="text-center">Data Route</th>
                            <th className="text-center" colspan="3">Servers</th>
                            <th className="text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.masterSlavePassive.map((data, index) => (
                        <tr key={index}>
                            <td width="20%">{data.master_location} to {data.slave_location}</td>
                            <td width="26%">
                            {data.master}
                            </td> 
                            <td width="8%">
                                -->
                            </td>
                            <td width="26%">
                                {data.slave}
                            </td>
                            <td className="text-center" width="20%">{data.status}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Routes;