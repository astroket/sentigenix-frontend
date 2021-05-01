import React, { useEffect, useState } from 'react';
import {Row, Col, Button} from 'reactstrap';

import './nlp.css';
import ReactSearchBox from 'react-search-box';
import axios from 'axios';
import { Gauge } from './charts/gauge';

const NLP = (props) => {
    const [score,setScore]=useState(0.5);
    const [magnitude,setMagnitude]=useState(1);
    const [inputQuery,setInputQuery]=useState();
    const [algo,setAlgo]=useState("Incubig");
    const [flag,setFlag]=useState(false)

    let url = "http://127.0.0.1:8000/nlp/apis/v1/";

    const onSubmit = () => {
        axios.get(url+algo+"?query="+inputQuery)
        .then((response) => {
            let temp = 0.5-(0.5*response.data.score)
            setScore(temp)
            setMagnitude(response.data.magnitude)
        });
        setFlag(true)
        
    }

    const getInput = (value) => {
        setInputQuery(value)
    }

    const onChange = (e) => {
        setAlgo(e.target.value)
        setFlag(false)
    }

    return (
        <div>
            <Row>
                <Col xs={12}>
                    <p>Please select one of the algorithms to test sentiment analysis</p>
                </Col>
            </Row>
            <Row className="Row">
                <Col xs={3}>
                    <input type="radio" name="Algo" value="gnn"
                        onChange={onChange}
                    />
                    Google Neural Network
                </Col>
                <Col xs={3}>
                    <input type="radio" name="Algo" value="spacy" 
                        onChange={onChange}
                    />
                    SpaCy (by explosion.ai)
                </Col>
                <Col xs={3}>
                    <input type="radio" name="Algo" value="incubig" 
                        onChange={onChange}
                    />
                    Incubig's Inhouse
                </Col>
            </Row>
            <Row>
                <div>
                    <ReactSearchBox 
                        placeholder = "search"
                        onChange = {getInput}
                        style={{width:"80%"}}
                    />
                    <div className="NLP">
                        <button type="button" onClick={(e) => {e.preventDefault(); onSubmit("bjp")}}>Analyze</button>
                    </div>
                </div>
            </Row>
            { flag &&
            <Row>
                <Col xl={6} style={{paddingLeft:"20%",paddingRight:"20%"}}>
                    <Gauge score={score}/>
                    <p className="align">
                        Polarity for given query was calculated to be <span style={{backgroundColor:"#FFD700"}}>{(0.5-score)/0.5}</span> 
                    </p>
                    <p className="align">
                        Magnitude(subjectivity) for given query was calculated to be <span style={{backgroundColor:"#FFD700"}}>{magnitude}</span> 
                    </p>
                </Col>
                
            </Row>
            }
        </div>
    );
}
 
export default NLP;