/* eslint-disable react/prop-types */

import Alert from '@mui/material/Alert';

const InfoAlert = ({ message, onInfo }) => {

    return (
        <Alert variant='filled' severity='info' onClose={() => {onInfo}}>{ message }</Alert>
    )
}

export default InfoAlert