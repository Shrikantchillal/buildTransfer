import React from 'react';
import axios from 'axios';

import Accordion from './accordion/accordion';


class ReplicationStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dcs: [],
            gamersData: [],
            buildsData: [],
            // temp1 = [],
            // temp2,
            // myDat
        }
    }

    componentWillMount() {
        const apiUrl = 'http://localhost:3000';
        
        this.getGamers(apiUrl);
        this.getBuilds(apiUrl);
        this.getDcs(apiUrl)
    }

    getDcs(apiUrl) {
        axios.get(apiUrl + '/dcs')
        .then(res => {
            console.log('dcs', res.data)
            this.state.dcs = res;
            this.setState({dcs: res.data})

            let temp = {};

            var myData = res.data;
            for(let dcData of myData) {
                let buildsinfo = {};
                let isValid = function (data) {
                    return data.dc === dcData.dc_id;
                };
                if (dcData.dc_id !== 1) {
                    temp[dcData.dc_name] = buildsinfo;
                    
                } else {
                    temp[dcData.dc_name] = buildsinfo;
                }
                temp[dcData.dc_name].region = dcData.region;
                temp[dcData.dc_name].region.dcid = dcData.dc_id;
            }
            this.temp1.push(temp);
            this.temp2 = this.setBuildStatus(this.temp1);
            console.log('temp2', this.temp2)

        })
    }
    getGamers(apiUrl) {
        axios.get(apiUrl + '/gamers')
        .then(res => {
            console.log('gamers', res.data);
            // this.getBuilds(apiUrl, res.data)
            this.setState({gamersData: res.data})

        })
    }
    getBuilds(apiUrl) {
        axios.get(apiUrl + '/builds')
        .then(res => {
            console.log('builds', res.data)
            // this.getDcs(apiUrl, data, gamersData);
            this.setState({buildsData: res.data})
        })
    }



    render() {
        return(
            <div>
                <div>Replication Status</div>
                <Accordion>
                    {this.state.dcs.map((dcList, index) => (
                        <div key={index} label={dcList.dc_name}>
                            <table className='table'>
                                <tbody>
                                    <tr>

                                    </tr>
                                </tbody>
                            </table>                            
                            <p>
                                <strong>Common Name:</strong> American Alligator
                            </p>
                            <p>
                                <strong>Distribution:</strong> Texas to North Carolina, US
                            </p>
                            <p>
                                <strong>Endangered Status:</strong> Currently Not Endangered
                            </p>
                        </div>  
                    ))}
                </Accordion>
            </div>
        )
    }
}

export default ReplicationStatus;
