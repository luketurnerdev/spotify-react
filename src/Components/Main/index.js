import React from 'react';
import {Button} from '@material-ui/core'

const testAPICall = () => {
    console.log('testclick')
}
const Main = props => {
    const {token} = props;
    return (
        <>
            <h1>User Logged In</h1>
            <h3>{token}</h3>
            <Button onClick={testAPICall}>Clickola</Button>
        </>
    )
};

export default Main;

