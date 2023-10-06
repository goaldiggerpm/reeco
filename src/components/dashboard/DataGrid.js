/**
 * @author Dev Prince Maurya
 * @version 0.0.1
 * ...
 */

import React, { useState } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// components
import ItemGrid from '../ItemGrid'
import { Box, Button, Paper, StyledImage, Typography } from '../StyledComponentAtoms'
import { updateStatus, stockSelector } from '../../store/slices/stockSlice';

//assets
import searchimg from '../../assets/icons8-search.svg'
import printerimg from '../../assets/icons8-printer-32.png'
import Modal from '../Modal';

const SearchBox = styled.input`
 background-color: #fff;
 border: none;
 &:focus{
    outline: none;
 }
 width: 100%;
 border-radius: 10px;
 font-size: 16px;
`;

/**
 * An component for dashboard data grid
 */
const DataGrid = () => {

    const { stocksList } = useSelector(stockSelector);
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [stock, setstock] = useState({})

    const openModal = (val) => {
        setstock({ ...val })
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Box style={{ width: '82.2%', paddingBottom: '20px', margin: '20px auto auto auto' }} >
            <Paper style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 0px'
            }} >
                <Paper style={{
                    width: '30vw',
                    height: '5vh',
                    borderRadius: '25px',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'space-between',
                    border: "2px solid #ccc",
                    padding: "0px 10px"
                }} >
                    <SearchBox placeholder='search...' />
                    <StyledImage medium src={searchimg} alt='searchimg' />
                </Paper>
                <Paper style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '40px'
                }} >
                    <Button brdcolorcode={'#1e633f'} >Add Item</Button>
                    <StyledImage large src={printerimg} alt='printerimg' />
                </Paper>
            </Paper>
            <ItemGrid stockdata={stocksList || []} action={updateStatus} modalaction={openModal} />
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Paper style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }} >
                    <Typography>
                        Update Status to '{stock?.status}' from '{stock?.data?.Status}' ?
                    </Typography>
                    <Typography>
                        {stock?.data?.Product_name}
                    </Typography>
                    <Paper style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', gap: '20px', alignSelf: 'end' }} >
                        <Button small brdcolorcode={'#1e633f'} onClick={() => { setIsModalOpen(false); }} >No</Button>
                        <Button small colorcode={'#1e633f'} onClick={() => { dispatch(updateStatus({ ...stock })); setIsModalOpen(false); }} >Yes</Button>
                    </Paper>
                </Paper>
            </Modal>
        </Box>
    )
}

export default DataGrid