import React, { useState } from 'react';

export const Body = ({data}) => {
    return (
        <tbody>
            {data.map((item, index) => 
            <tr key={index}>
                {/* <td>{item.id}</td> */}
                <td>{item.tweet}</td>
                <td>{item.author}</td>
                <td>{item.subjectivity}</td>
                <td>{item.polarity}</td>
            </tr>
            )}
        </tbody>
    )
}