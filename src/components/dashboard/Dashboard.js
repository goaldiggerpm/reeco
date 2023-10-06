/**
 * @author Dev Prince Maurya
 * @version 0.0.1
 * ...
 */

import React from 'react'

// components
import DashboardHeader from './DashboardHeader'
import DashboardInfoBox from './DashboardInfoBox'
import DataGrid from './DataGrid'

/**
 * Main component for dashboard
 */
const Dashboard = () => {
    return (
        <div style={{ width: '100%', paddingBottom: '10vh' }} >
            <DashboardHeader />
            <DashboardInfoBox />
            <DataGrid />
        </div>
    )
}

export default Dashboard