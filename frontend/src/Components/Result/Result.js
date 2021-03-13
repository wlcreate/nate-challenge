import React from 'react';
import {FixedSizeList as List} from 'react-window';
import ResultRow from './ResultRow'

const Result = (props) => {

    const result = props.result

    const rowData = Object.keys(result).map((key, i) => {
        return <p key={i}>
            Text: {key} Occurrences: {result[key]}
        </p>
    })

    return (
        <div>
            <h2>Result</h2>
            <List
                height={300}
                itemCount={Object.keys(result).length}
                itemSize={25}
                width={400}
                itemData={rowData}
                {...props}
            >
                {ResultRow}
            </List>
        </div>
    )
}

export default Result