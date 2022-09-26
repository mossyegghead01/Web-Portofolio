import { Button, Box, IconButton } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import * as React from "react"
import { ColorModeContext } from "../App";
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

export function Navbar() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <Box sx={{
            width: '97.5%',
            position: 'sticky',
            margin: "auto",
            backgroundColor: 'primary.main',
            borderStyle: 'hidden',
            top: 10,
            borderRadius: 1,
            zIndex: 1100,
        }}>
            <Button href='/home' variant='contained' disableElevation>
                Home
            </Button>
            <Button href='/contact' variant='contained' disableElevation>
                Contact
            </Button>
            <Button href='/projects' variant='contained' disableElevation>
                Projects
            </Button>
            <IconButton onClick={colorMode.toggleColorMode} sx={{
                float: 'right',
                borderRadius: '0%',
            }}>
                {theme.palette.mode === 'dark' ? <Brightness7Icon fontSize="inherit" /> : <Brightness4Icon fontSize="inherit" />}
            </IconButton>
        </Box>
    )
}