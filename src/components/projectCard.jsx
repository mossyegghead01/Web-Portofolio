import { Avatar, Card, CardActions, CardContent, CardHeader, CardActionArea, Chip } from "@mui/material";
import pypi from '../img/pypi.png'
import PublicIcon from '@mui/icons-material/Public';

const logo = {
    pypi: (<Avatar alt={"Python Package Index"} src={pypi} variant="square" />),
    Website: (<Avatar alt="Web"><PublicIcon /></Avatar>)
}

const tags = {
    Discontinued: (<Chip color="error" label="Discontinued" />),
    Maintained: (<Chip color="success" label="Maintained" />),
    ClosedSource: (<Chip label="Closed Source" />),
    OpenSource: (<Chip color="primary" label="Open Source" />)
}

export function ProjectCard(prop) {
    return prop.href !== undefined ? (
        <>
            <Card sx={{
                height: "100%",
                width: "100%"
            }}>
                <CardActionArea href={prop.href} target="_blank" rel="noopener noreferrer" sx={{ height: "100%" }}>
                    <CardHeader title={prop.title} subheader={prop.hoster} avatar={
                        logo[prop.hoster]
                    } />
                    <CardContent>
                        {prop.description}
                    </CardContent>
                    <CardActions>
                        {prop.tags.map((tag) => (
                            tags[tag]
                        ))}
                    </CardActions>
                </CardActionArea>
            </Card>
        </>
    ) : (
        <>
            <Card sx={{
                height: "100%",
                width: "100%"
            }}>
                <CardHeader title={prop.title} subheader={prop.hoster} avatar={
                    logo[prop.hoster]
                } />
                <CardContent>
                    {prop.description}
                </CardContent>
                <CardActions>
                    {prop.tags.map((tag) => (
                        tags[tag]
                    ))}
                </CardActions>
            </Card>
        </>
    )
}