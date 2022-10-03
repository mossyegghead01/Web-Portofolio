import { Button, Typography } from "@mui/material";

export default function NotFound() {
    return (
        <>
            <Typography sx={{
                margin: 0,
                position: "absolute",
                textAlign: "center",
                top: "45%",
                left: "50%",
                transform: "translate(-50%, -45%)"
            }}>
                <h1>Whoops!</h1>
                This pages does not exist!<br />
                <Button href="/" variant='contained'>Return to home</Button>
            </Typography>
        </>
    )
}