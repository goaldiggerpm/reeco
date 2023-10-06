/**
 * @author Dev Prince Maurya
 * @version 0.0.1
 * ...
 */

import React from 'react';
import { Button, Paper, StyledImage, Typography } from './StyledComponentAtoms';

// components
import { Table, TableCell, TableHeadRow, TableHeader, TableHeaderCell, TableRow, TableWrapper } from './StyledComponentAtoms/TableGrid';

// assets
import checkimg from '../assets/icons8-check-32.png'
import wrongimg from '../assets/icons8-wrong-50(1).png'

/**
 * An molecule component for data table 
 * @param {Array} columns - column names
 * @param {Array} data - table data 
 * @param {String} actionRowName - this string is given to pass cases for column having actionables 
 * @param {String} imgRowName - this string is given to pass cases for column having images 
 * @param {function} modalaction - action passdown from modal 
 */
function DataTable({ columns, data, actionRowName, imgRowName, modalaction }) {
    // const dummyArray = Array.from({ length: Object.keys(columns[0]).length }, (_, index) => index);
    // creating a array which has all the column names
    const headerVal = Object.values(columns[0])

    return (
        <TableWrapper>
            <Table>
                <TableHeader>
                    <TableHeadRow>
                        {/* maping all the header/columns values */}
                        {headerVal.map((column, index) => {
                            if (column !== imgRowName) return <TableHeaderCell key={index}>
                                <Typography xsmall start >{column}</Typography>
                            </TableHeaderCell>
                            else return <TableHeaderCell key={index}>
                                <Typography start > </Typography>
                            </TableHeaderCell>
                        }
                        )}
                    </TableHeadRow>
                </TableHeader>
                <tbody>
                    {/* maping all the row data values */}
                    {data.map((rowData, rowIndex) => (
                        <React.Fragment key={rowIndex} >
                            <TableRow key={rowIndex}>
                                {headerVal.map((column, colIndex) => {
                                    if (column === imgRowName) return <TableCell><StyledImage large src={rowData[imgRowName]} alt='avocadoimg' /></TableCell>
                                    else if (column === actionRowName) return <TableCell style={{ display: 'flex' }} key={colIndex} >
                                        <Paper style={{ display: 'flex' }} >
                                            {
                                                rowData[column] === 'approved' ?
                                                    <Button nopoint colorcode={'#3dca72'} disabled >Approved</Button>
                                                    :
                                                    <Button nopoint colorcode={'#f66d44'} disabled >Missing</Button>
                                            }
                                        </Paper>
                                        <Paper style={{ marginLeft: '12%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }} >
                                            <StyledImage medium point src={checkimg} alt='checkimg' onClick={() => modalaction({ status: 'approved', col: rowIndex, data: rowData })} />
                                            <StyledImage medium point src={wrongimg} alt='wrongimg' onClick={() => modalaction({ status: 'missing', col: rowIndex, data: rowData })} />
                                            <Typography>Edit</Typography>
                                        </Paper>
                                    </TableCell>
                                    else return <TableCell key={colIndex}>{rowData[column]}</TableCell>
                                }
                                )}
                            </TableRow>
                        </React.Fragment>
                    ))}
                </tbody>
            </Table>
        </TableWrapper>
    );
}


/**
 * An component to show data in table grid 
 * @param {object} data - table data
 * @param {function} modalaction - action passdown from modal 
 */
const ItemGrid = ({ stockdata, modalaction }) => {

    const columns = [
        {
            img: 'img', Product_name: 'Product_name', Brand: 'Brand', Price: 'Price', Quantity: 'Quantity', Total: 'Total', Status: 'Status'
        }
    ];

    return (
        <DataTable columns={columns} data={stockdata} actionRowName={'Status'} imgRowName={'img'} modalaction={modalaction} />
    );
}

export default ItemGrid;
