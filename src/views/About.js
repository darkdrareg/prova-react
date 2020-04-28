import React, {Component} from 'react'

import Box from '@material-ui/core/Box';

export default class About extends Component {
  render() {
    return (
        <Box bgcolor="black">
            <h1 className="text-center"> About </h1>
        
            <p>This page is a react training, that atack an external API to get posts of a given user.</p>
        </Box>
    )
  }
}