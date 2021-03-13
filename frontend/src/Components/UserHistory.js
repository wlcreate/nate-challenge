import React from 'react';

const UserHistory = (props) => {

    const urlsArray = props.urls

    return (
        <div>
            <h2>Here are your previous urls</h2>
            <ul>
                {urlsArray && urlsArray.map((url, index) => {
                    return <li key={index}>{url}</li>
                })}
            </ul>
      </div>
    )
}

export default UserHistory