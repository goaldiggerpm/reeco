/**
 * @author Dev Prince Maurya
 * @version 0.0.1
 * ...
 */

import React from 'react'

// components
import { Button, StyledImage, Typography } from '../StyledComponentAtoms'

// assets
import ArwRight from '../../assets/arrow-right-30.png'

/**
 * An component for dashboard header container
 */
const DashboardHeader = () => {
    return (
        <div style={{ width: '100%', backgroundColor: '#fff', boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.15)', padding: '20px 0px' }}>
            <div style={{ alignSelf: 'center', width: '86%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', flex: 1, gap: '30px', margin: 'auto' }} >
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 }} >
                    <Typography pointer >Orders</Typography>
                    <StyledImage small src={ArwRight} alt='arwright' />
                    <Typography underline pointer >Order 32457ABC</Typography>
                </div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', }} >
                    <Typography large>Order 32457ABC</Typography>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 }} >
                        <Button brdcolorcode={'#1e633f'} >Back</Button>
                        <Button colorcode={'#1e633f'}>Approve Order</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader