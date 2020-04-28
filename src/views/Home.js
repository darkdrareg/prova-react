import React, {Component} from 'react'

import Search from '../components/Search';
import Result from '../components/Result'

import Box from '@material-ui/core/Box';

const axios = require('axios').default; /* autocomplete */


/* This is a class component, we have state and lifeclicly in functional component we didn't have this */
export default class Home extends Component {
    
    state = {      /* state is an object to store data. Each time state change this part is reloaded in react */
        term : '',
        posts : []
    }
    
    apiSearch = () => {
        const term = this.state.term;
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${term}`;
        
        axios
            .get(url)
            .then(response => {
                this.setState({ 
                    posts : response.data });
        })
    }
    
    searchData = (term)=> {
        this.setState({
            term
        }, () => {
            this.apiSearch(); /* in order to launch apiSearch when the state changes */
        })
    }
    
    render() {
        return (
            <Box bgcolor="black">
                <h1 className="text-center"> Search Post by user </h1>
                <Search
                    searchData={this.searchData}
                />
                <Box bgcolor="gray">
                    <Result
                        posts ={this.state.posts}
                    />
                </Box>
            </Box>
        );
    }
}