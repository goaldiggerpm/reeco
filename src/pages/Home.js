/**
 * @author Dev Prince Maurya
 * @version 0.0.1
 * ...
 */

import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// APIs
import { getData } from '../store/actions/getData';

// components
import Header from '../components/Header';
import Layout from '../components/Layout';
import Dashboard from '../components/dashboard/Dashboard';

/**
 * Main Home page
 */
const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    return (
        <React.Fragment>
            <Layout>
                <Header />
                <Dashboard />
            </Layout>
        </React.Fragment>
    )
}

export default Home