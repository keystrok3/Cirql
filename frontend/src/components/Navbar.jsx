
import Box from '@mui/material/Box'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    const { logout } = useContext(AuthContext)

    return (
        <Box component={'nav'}>
            <MenuList>
                <MenuItem>
                    <ListItemText>Home</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Profile</ListItemText>
                </MenuItem>
                <MenuItem onClick={logout}>
                    <ListItemText>Logout</ListItemText>
                </MenuItem>
            </MenuList>
        </Box>
    )
}


export default Navbar