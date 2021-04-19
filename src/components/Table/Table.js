import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import './Table.css';

function MyTable(props) {
    const keys = Object.keys(props.students[0]);
    return (
    <div>
        <Table>
            {
                <TableHead>{    
                    keys.map(key => {
                        return <TableCell className="tab1">{key}</TableCell>
                    })
                    }</TableHead>
            }
            {    
                props.students.map(student => {
                    const values = Object.values(student);
                        return <TableRow> { values.map(value => {
                            return <TableCell border-col>{value}</TableCell>
                            }) } </TableRow>
                })
            }
        </Table>
    </div>
    // <div>
    //     <table>
    //         <th>
    //             <td>id</td>
    //             <td>name</td>
    //             <td>age</td>
    //             <td>subject</td>
    //         </th>
    //     { props.students.map(student => {
    //         console.log("studemts", student);
    //         const { id, name, age, subject } = student;
    //             return <tr>
    //                 <td>{id}</td>
    //                 <td>{name}</td>
    //                 <td>{age}</td>
    //                 <td>{subject}</td>
    //             </tr>
    //         })
    //     }
    //     </table>
    // </div>
)
}

export default MyTable;