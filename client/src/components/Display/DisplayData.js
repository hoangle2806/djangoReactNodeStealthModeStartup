
import React, {Component} from 'react';
import axios from 'axios';

class DisplayData extends Component{
    state = {
        data : '',
    }

    componentDidMount(){
        this.loadData();
    }

    loadData = () => {
        axios.get('/api/data')
            .then(res => {
                this.setState({data : res.data})
            })
    }
    render(){
        return (
            <div>
                <h1>{this.state.data.res}</h1>
            </div>
        )
    }
}

export default DisplayData;