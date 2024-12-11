/* eslint-disable react/prop-types */

import Alert from '@mui/material/Alert';

const ErrorAlert = ({ message, onError }) => {

    return (
        <Alert variant='filled' severity='error' onClose={() => {onError(false)}}>{ message }</Alert>
    )
}

export default ErrorAlert