import React, { Component } from 'react';

class Search extends Component {
    
    searchRef = React.createRef(); /* The ref allow to read the value of an input in react */

    handleData = (e) => {
        e.preventDefault();
        const term = this.searchRef.current.value;
        this.props.searchData(term);        /* with props we can pass info from parents to childs */
    }
/* We use the onSubmit to call the function that to send the data */
    render(){
        return(
            <form onSubmit={this.handleData}> 
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="Write the user id"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Search..."/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Search;