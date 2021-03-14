import React from 'react';
import {FixedSizeList as List} from 'react-window';
import ResultRow from './ResultRow'
import './Result.css'

const Result = (props) => {

    const result = props.result

    const rowData = Object.keys(result).map((key, i) => {
        return <p key={i}>
            {key}: {result[key]}
        </p>
    })

    return (
        <div className="result-container">
            <h2>Result</h2>
            <List
                height={400}
                itemCount={Object.keys(result).length}
                itemSize={30}
                width={200}
                itemData={rowData}
                {...props}
            >
                {ResultRow}
            </List>
        </div>
    )
}

export default Result