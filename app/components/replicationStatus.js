import React from 'react';
import axios from 'axios';

import Accordion from './accordion/accordion';


class ReplicationStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buildsData: [],
        }
    }

    componentWillMount() {
        const apiUrl = 'http://localhost:3000';
        this.getBuildsData(apiUrl)
    }

    getBuildsData(apiUrl){
        axios.get(apiUrl + '/buildsData')
        .then(res => {
            console.log('builds', res.data)
            this.setState({buildsData: res.data[0]})
        })
    }

    render() {
        return(
            <div>
                <h3 class="mt-3 mb-3">Replication Status</h3>
                <Accordion>
                    {this.state.buildsData.map((dcList, index) => (
                        <div key={index} label={dcList.dc_name}>
                            <table className='table'>
                                <thead>
                                    <tr>
                                    <th>BUILDS</th>
                                    <th >PROGRESS</th>
                                    <th></th>
                                    <th>PUSHHOST DETAILS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {dcList.builds.map((build, index) => (
                                    <tr key={index}>
                                        <td>{build.build}</td>
                                        <td>{build.status}</td>
                                        <td></td>
                                        <td>{build.build_timestamp}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>                            
                        </div>  
                    ))}
                </Accordion>
            </div>
        )
    }
}

export default ReplicationStatus;
