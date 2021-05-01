import React, { Component } from 'react';
import {Row, Col} from "reactstrap";
import {Link} from "react-router-dom";
import "./nav.css"

class Nav extends Component {
    state = { 
        navStyle: {color:'#000000'}
     }
    render() { 
        return ( 
            <div>
                <Row>
                    <nav>
                        <ul className="nav-links">
                            <Link style={this.state.navStyle} to="/sentiment">
                                <li className="space">
                                    Sentiment Analysis Engine
                                </li>
                            </Link>
                            <Link style={this.state.navStyle} to="/nlp">
                                <li className="space">
                                    NLP Algorithms
                                </li>
                            </Link>
                        </ul>
                    </nav>
                </Row>  
            </div>
            
        );
    }
}
 
export default Nav;