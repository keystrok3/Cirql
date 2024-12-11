/* eslint-disable react/prop-types */

import Alert from '@mui/material/Alert';

const SuccessAlert = ({ message, onSuccess }) => {

    return (
        <Alert variant='filled' severity='success' onClose={() => {onSuccess}}>{ message }</Alert>
    )
}

export default SuccessAlert