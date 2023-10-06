/**
 * @author Dev Prince Maurya
 * @version 0.0.1
 * ...
 */

import React from 'react'

// components
import { Box, Paper, Typography, VerticalLine } from '../StyledComponentAtoms'


/**
 * An component for dashboard dashboard info
 */
const DashboardInfoBox = () => {

    const colNames = [
        {
            title: 'Supplier',
            value: 'East Coast Fruits & Vegetables'
        },
        {
            title: 'Shipping date',
            value: 'Thu, Feb 10'
        },
        {
            title: 'Total',
            value: '$ 15,028.3'
        },
        {
            title: 'Category',
            value: 'East Coast Fruits & Vegetables'
        },
        {
            title: 'Department',
            value: '300-444-678'
        },
        {
            title: 'Status',
            value: 'Awaiting for approval',
            last: true
        }
    ]

    return (
        <Box style={{
            width: '86%', height: 'auto', padding: '10px 0px', alignSelf: 'center', margin: '20px auto auto auto', textAlign: 'center', overflow: 'hidden', position: 'relative'
        }} >
            <Paper style={{ display: 'grid', gridDirection: 'columns', alignItems: 'flex-start', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', gap: 'clamp(0px, 6px, 10px)', overflow: 'auto' }} >
                {
                    colNames.map((val, index) => (
                        <Paper key={index} style={{ height: '100%', display: 'flex' }} >
                            <Paper style={{ flex: 1, marginLeft: 'clamp(0px, 30px, 40px)' }} >
                                <Typography xsmall start style={{ fontSize: 'clamp(10px, 18px, 24px)' }} >{val?.title}</Typography>
                                <Typography medium start style={{ fontWeight: 600, fontSize: 'clamp(12px, 22px, 30px)' }}>{val?.value}</Typography>
                            </Paper>
                            {val.last ? '' : <VerticalLine />}
                        </Paper>
                    ))
                }
            </Paper>
        </Box>
    )
}

export default DashboardInfoBox