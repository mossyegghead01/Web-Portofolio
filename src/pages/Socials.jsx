import { Grid, Button, Container } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Social() {
    return (
        <>
            <Container sx={{
                paddingTop: 2.5,
                textAlign: "center",
            }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }}>
                    <Grid item xs={12} sm={12} md={12}>
                        <h1>Social Media</h1>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                        <Button href="https://github.com/mossyegghead01" target="_blank" rel="noopener noreferrer" variant="contained" startIcon={<GitHubIcon />} endIcon={<OpenInNewIcon />} sx={{ width: "100%", height: "100%" }}>mossyegghead01</Button>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                        <Button href="https://twitter.com/MrMossy11" target="_blank" rel="noopener noreferrer" variant="contained" startIcon={<TwitterIcon />} endIcon={<OpenInNewIcon />} sx={{ width: "100%", height: "100%" }}>MrMossy11</Button>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                        <Button href="mailto:luthfihaidar1176@gmail.com" target="_blank" rel="noopener noreferrer" variant="contained" startIcon={<EmailIcon />} endIcon={<OpenInNewIcon />} sx={{ width: "100%", height: "100%" }}>luthfihaidar1176@gmail.com</Button>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                        <Button href="https://www.youtube.com/channel/UCJDjZZRr5jMED0BGQpE7UhQ" target="_blank" rel="noopener noreferrer" variant="contained" startIcon={<YouTubeIcon />} endIcon={<OpenInNewIcon />} sx={{ width: "100%", height: "100%" }}>Luthfi Haidar</Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}