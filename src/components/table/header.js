import React, { useState } from 'react';

export const Header = () => {
    return (
        <thead>
            {/* <th>ID</th> */}
            <th>Tweet</th>
            <th>Author</th>
            <th>Subjectivity</th>
            <th>Polariy</th>
        </thead>
    )
}