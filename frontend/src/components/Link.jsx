/* eslint-disable react/prop-types */
import { Link as RouterLink } from "react-router-dom"
import { Link as MuiLink }  from '@mui/material'

const Link = ({ toPath, children }) => {


    return (
        <MuiLink component={RouterLink} to={`/${toPath}`}>{children}</MuiLink>
    )
}


export default Link