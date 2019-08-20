import React from 'react';
import Axios from 'axios';

class StorageUtilization extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            storageData: []
        }        
    }
    componentWillMount() {
        const apiUrl = 'http://localhost:3000';
        this.getStorageData(apiUrl)
    }
    getStorageData(apiUrl) {
        Axios.get(apiUrl + '/storageData')
        .then(res => {
            console.log('storageData', res.data)
            this.setState({storageData: res.data})
        })
    }


    render() {
        return(
            <div>
                <h3 class="pt-3 mb-3">Storage Utilization</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>LOCATION</th>
                            <th>DISK SPACE UTILIZED (GB)</th>
                            <th>DISK SPACE UTILIZED (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.storageData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.location}</td>
                                <td>{data.disk_usage}</td>
                                <td>{(data.disk_usage/data.disk)*100}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StorageUtilization;