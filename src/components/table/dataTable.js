import React, { useState } from 'react';
import { Table } from 'reactstrap';
import { Body } from './body';
import { Header } from './header';

export const DataTable = ({data}) => {
    return (
        <Table striped bordered hover>
            <Header />
            <Body data={data}/>
        </Table>
    )
}