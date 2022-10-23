import { Container, Tooltip, Typography, Grid, Card, CardContent, Stack, Divider, Avatar, Link } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import Luthfi from "../img/Luthfi.jpg"

export default function Home() {
    const ageDifMs = Date.now() - new Date("July 14, 2006 00:00:00")
    const ageDate = new Date(ageDifMs)
    const age = ageDate.getFullYear() - 1970
    const theme = useTheme();
    return (
        <>
            <Container sx={{
                paddingTop: 2.5,
                textAlign: "center",
            }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Avatar alt="Luthfi Haidar" src={Luthfi} sx={{
                                    height: 150,
                                    width: 150,
                                    [theme.breakpoints.down("md")]: {
                                        margin: "auto"
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        float: "right"
                                    }
                                }} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} sx={{
                                [theme.breakpoints.down("md")]: {
                                    textAlign: "center"
                                },
                                [theme.breakpoints.up("md")]: {
                                    textAlign: "left"
                                }
                            }}>
                                <h1>Hey there!</h1>
                                <Typography variant="body2">My name is <Tooltip title={`"A kind and gentle lion"`} placement="top">{<Typography sx={{ textDecoration: 'underline' }} display="inline"><b>Luthfi Haidar</b></Typography>}</Tooltip></Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Card sx={{
                            height: "100%",
                        }}>
                            <CardContent>
                                <Typography variant="h5" component="div" sx={{ textDecoration: 'underline' }}>A bit about me</Typography>
                                <Typography variant="body2" color="text.secondary">My name is Luthfi Haidar. I'm a {age} year old teenager from Bandung, Indonesia. I'm currently an 11th grade student at Alfa Centauri Senior High School.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Card sx={{
                            height: "100%",
                        }}>
                            <CardContent>
                                <Typography variant="h5" component="div" sx={{ textDecoration: 'underline' }}>My Hobbies</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <Stack
                                        divider={<Divider flexItem />}
                                    >
                                        {"Reading Books"}
                                        {"Coding"}
                                    </Stack>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Card sx={{
                            height: "100%",
                        }}>
                            <CardContent>
                                <Typography variant="h5" component="div" sx={{ textDecoration: 'underline' }}>Educations</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <Stack
                                        divider={<Divider flexItem />}
                                    >
                                        {"Bintang Madani Elementary School (2012 - 2018)"}
                                        {"Bintang Madani Junior High School (2018 - 2021)"}
                                        {"Alfa Centauri Senior High School (2021 - Present)"}
                                    </Stack>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Card sx={{
                            height: "100%",
                        }}>
                            <CardContent>
                                <Typography variant="h5" component="div" sx={{ textDecoration: 'underline' }}>Learn More</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <Stack
                                        divider={<Divider flexItem />}
                                    >
                                        <Link href="/socials">My social media</Link>
                                        // <Link href="/projects">My projects</Link>
                                    </Stack>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
