import React from 'react';
const Main = props => {
    const {token} = props;
    return (
        <>
            <h1>User Logged In</h1>
            <h3>{token}</h3>
        </>
    )
};

export default Main;

