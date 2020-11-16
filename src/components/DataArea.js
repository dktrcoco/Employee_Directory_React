import React, { Component } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
import API from "../utils/API";
import "../styles/DataArea.css";

export default class DataArea extends Component {
    // defines initial state    
    state = {
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    }

    componentDidMount() {
        API.getUsers().then(results => {
            this.setState({
                // when called, users is filled with the data from the people
                // and remains static and used as a reference to update
                // filteredUsers. Otherwise we would lose the data of the people
                // filtered out without another API call
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }

    // array of objects that are defined by name and display styling width in percentage
    headings = [
        { name: "Image", width: "10%" },
        { name: "Name", width: "10%" },
        { name: "Phone", width: "20%" },
        { name: "Email", width: "20%" },
        { name: "DOB", width: "10%" }
    ]

    // when called this will toggle between descend and ascend
    handleSort = heading => {
        // pulling state here
        if (this.state.order === "descend") {
            // setting state here
            this.setState({
                order: "ascend"
            })
        } else {
            this.setState({
                order: "descend"
            })
        }

        // descending is a-b, ascending is b-a
        const compareNames = (a, b) => {
            if (this.state.order = "ascend") {
                // accounts for missing values
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                // numerically
                else if (heading === "name") {
                    // first is a jquery function that returns the first index of an array
                    // localeCompare is a string function
                    return a[heading].first.localeCompare(b[heading].first);
                } else {
                    return a[heading] - b[heading];
                }
            } else {
                // account for missing values
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                // numerically
                else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            }

        }
        const sortedUsers = this.state.filteredUsers.sort(compareNames);
        // setting the state of filteredUsers to sortedUsers
        this.setState({ filteredUsers: sortedUsers });

        const compareDOB = (a, b) =>{
            if (this.state.order = "ascend") {
                // accounts for missing values
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                // numerically
                else if (heading === "DOB") {
                    // first is a jquery function that returns the first index of an array
                    // localeCompare is a string function
                    return a[heading].first.localeCompare(b[heading].first);
                } else {
                    return a[heading] - b[heading];
                }
            } else {
                // account for missing values
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                // numerically
                else if (heading === "DOB") {
                    return b[heading].first.localeCompare(a[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            } 
        }
        

    }

    // function doing the filtering based on what is typed in search
    handleSearchChange = event => {
        console.log(event.target.value) // this will log what's entered in the search input
        const filter = event.target.value;
        // this is a .filter call on the user set
        const filteredList = this.state.users.filter(item => {
            // merge data together then see if user input is inside
            let values = Object.values(item)
                .join("")
                .toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filteredUsers: filteredList });
    }

    render() {
        return (
            <>
                <Nav handleSearchChange={this.handleSearchChange} />
                <div className="data-area">
                    {/* sending DataTable the below three properties */}
                    <DataTable
                        headings={this.headings}
                        users={this.state.filteredUsers}
                        handleSort={this.handleSort}
                    />
                </div>
            </>
        );
    }
}