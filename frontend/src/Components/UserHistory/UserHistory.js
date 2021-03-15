import React from 'react';
import './UserHistory.css';

const UserHistory = (props) => {

    const urlsArray = props.history

    return (
        <div>
            <h2>Here are your previous urls</h2>
            {
                urlsArray.length === 0
                ?
                <p>You don't have any urls!</p>
                :
                <ul>
                    {urlsArray && urlsArray.map((url, index) => {
                        return <li key={index}>{url}</li>
                    })}
                </ul>
            }
      </div>
    )
}

export default UserHistory