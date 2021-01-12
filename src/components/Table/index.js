import React from 'react'
import API from "../../utils/API"
class Table extends React.Component {
    state = {
        default: [],
        employee: [],
        search: ""
    }

    componentDidMount() {
        API.getRandomEmployees()
            .then(res => this.setState({ employee: res.data.results }))
            .then(res => this.setState({ default: this.state.employee}))
            .then(res => console.log(this.state.employee))
    }

    filterByName = event =>{
        const targetName = event.target.value;

        const filteredArr = this.state.default.filter(element => element.name.first.includes(targetName) || element.name.last.includes(targetName));
        this.setState({employee: filteredArr});
    }

    sortByFirstName = () => {
        let sortArray = this.state.default;
        sortArray.sort(function(a, b) {
            let lastNameA = a.name.first.toUpperCase();
            let lastNameB = b.name.first.toUpperCase();

            if(lastNameA < lastNameB){
                return -1;
            }
            if(lastNameA > lastNameB){
                return 1;
            }
            return 0
        })
        this.setState({ employee: sortArray })
    }
    render(){
        return (
            <>
            <input onChange={this.filterByName} placeholder="Search by Name"></input>
            <table className="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">Picture</th>
                    <th scope="col" onClick={this.sortByFirstName}>Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employee.map(element=>(
                            <tr>
                                <td><img src={element.picture.thumbnail} alt={element.name.first}/></td>
                                <td>{element.name.first} {element.name.last}</td>
                                <td>{element.phone}</td>
                                <td>{element.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </>
        )
    }
}

export default Table
