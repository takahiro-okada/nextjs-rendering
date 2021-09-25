import React from "react";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import Link from "next/link";

export const Cards = (props) => {
  const { posts, title } = props;
  return (
    <Container>
      <h2>{title}: Rendering</h2>
      <Grid container>
        {posts.map((post) => {
          return (
            <Grid item md={4} container key={post.id}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ID:{post.id}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Grid>
          );
        })}
      </Grid>
      <Link href="/">
        <a>戻る</a>
      </Link>
    </Container>
  );
};
