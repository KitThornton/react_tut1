// Okay, here I am going to mess around and create a table in react
// We'll populate this table with some data and then look to update
// it using set state

import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class DynamicTable extends React.Component {
    constructor(props) {
        //since we are extending class Table so we have to use super in order to override Component class constructor
        super(props)
        this.state = { //state is by default an object
            students: [
                { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
                { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
                { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
                { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
            ]
        }
    }

    renderTableData() {

        return this.state.students.map((student, index) => {
            const { id, name, age, email } = student //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                </tr>
            )
        })
    }

    render() {
        return(
            <div className="container">
                <BootstrapTable data={this.state.students} size={"sm"} version="4" ref="table" striped bordered hover responsive>
                    <TableHeaderColumn width={"10%"} dataField='id' headerAlign={"center"} dataAlign={"center"} isKey={true}>
                        Id
                    </TableHeaderColumn>
                    <TableHeaderColumn width={"15%"} dataField='name' headerAlign={"center"} dataAlign={"center"}>
                        Name
                    </TableHeaderColumn>
                    <TableHeaderColumn width={"10%"} dataField='age' headerAlign={"center"} dataAlign={"center"}  dataSort={true}>
                        Age
                    </TableHeaderColumn>
                    <TableHeaderColumn width={"20%"} dataField='email' headerAlign={"center"} dataAlign={"center"} dataSort={true}>
                        Email
                    </TableHeaderColumn>

                </BootstrapTable>
            </div>
      );
    };
}

export default DynamicTable;