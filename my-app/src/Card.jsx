import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275 }} key={props.id}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          User Info
        </Typography>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          username: {props.username}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          email: {props.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => props.handleClick(props.id)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
