import React from "react";
import "./ProjectCard.css";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles
} from "@material-ui/core";
import { createStyles } from "@material-ui/styles";

const styles = makeStyles(
  createStyles({
    card: {
      maxWidth: 345,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      marginButton: 10,
      backgroundColor: "#c38d9e"
    },
    media: {
      height: 230,
      width: 240,
      flexGrow: 1
    }
  })
);
export interface Project {
  title: string;
  img: string;
  description: string;
  toolIcons: string[];
}

const ProjectCard: React.FC<Project> = (props: Project) => {
  const { title, img, description, toolIcons } = props;
  const classes = styles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          style={{
            height: 230,
            width: 240,
            flexGrow: 1
          }}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {toolIcons.map(icon => {
          return <img src={icon} height={40} width={40} alt={icon} />;
        })}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
