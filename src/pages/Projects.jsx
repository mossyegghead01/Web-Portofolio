import * as React from 'react'
import { Container, Grid } from "@mui/material";
import { ProjectCard } from "../components/projectCard";

const projects = [
    {
        title: "Random Event",
        description: "A python module made to generate random event at almost random time",
        hoster: "pypi",
        tags: ["Discontinued", "OpenSource"],
        href: "https://pypi.org/project/Random-Event/",
    },
    {
        title: "Profile website",
        description: "You are looking at it right now",
        hoster: "Website",
        tags: ["Maintained", "ClosedSource"]
    }
]

export default function Projects() {
    return (
        <>
            <Container sx={{
                paddingTop: 2.5,
            }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                    {projects.map((data) => (
                        <Grid item xs={4} sm={4} md={4}>
                            <ProjectCard title={data.title} description={data.description} hoster={data.hoster} tags={data.tags} href={data.href} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}