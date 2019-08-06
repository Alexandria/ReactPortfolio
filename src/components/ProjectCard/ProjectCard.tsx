import React from "react";
import "./ProjectCard.css";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
export interface Project {
  title: string;
  img: string;
  description: string;
  toolIcons: string[];
}

const ProjectCard: React.FC<Project> = (props: Project) => {
  const { title, img, description, toolIcons } = props;

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
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
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
