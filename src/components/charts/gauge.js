import React, { useState } from 'react';
import GaugeChart from 'react-gauge-chart';

export const Gauge = (props) => {
    return (
        <div>
            <GaugeChart id="gauge-chart1" 
                nrOfLevels={20} 
                percent={props.score} 
            />
        </div>
        
    )
}