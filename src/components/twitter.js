import axios from 'axios';
import React, { Component, useState } from 'react';
import ReactSearchBox from 'react-search-box';
import { Button, Dropdown, Form, Table } from 'reactstrap';
import { DataTable } from './table/dataTable';
import './twitter.css'

const Twitter = (props) => {
    const [data,setData]=useState([]);
    const [inputQuery,setInputQuery]=useState();
    const [flag, setFlag] = useState(false);

    let url = "http://127.0.0.1:8000/sentigenix/apis/v1/?query=";

    const getData = (value) => {
        setInputQuery(value);
    }

    const onSubmit = () => {
        axios.get(url+inputQuery)
        .then((response)=> {
            setData(response.data)
        });
        setFlag(true)
    }

    return (
        <div>
            <div>
                <h4 className="bold">Sentiment Analysis on Twitter Posts</h4>
                <p>powered by Sentigenix</p>
            </div>
            <Form className="center">
                <ReactSearchBox
                    placeholder = "Enter query to be analyzed..."
                    onChange = {getData}
                />
                <Dropdown>
                    
                </Dropdown>
                <Button onClick={onSubmit}>
                    Analyze
                </Button>
            </Form>
            { flag &&
            <div>
                <h6 className="align">Analysis of posts related to '{inputQuery}'</h6>
                <DataTable data={data}/>
            </div>
            }
        </div>
    )
}
 
export default Twitter;