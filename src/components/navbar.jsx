import { Button, Box } from "@mui/material"
import * as React from "react"

export function Navbar() {
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
            <Button href='/socials' variant='contained' disableElevation>
                Socials
            </Button>
            <Button href='/projects' variant='contained' disableElevation>
                Projects
            </Button>
        </Box>
    )
}