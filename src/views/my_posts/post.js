import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button, Grid, Stack } from "@mui/material";
import Image from "next/image";

export default function RecipeReviewCard() {
  return (
    <Card
      sx={{
        px: 2,
        border: "0.5px solid",
        borderColor: (theme) => theme.palette.action.focus,
        boxShadow: (theme) => theme.shadows[9],
      }}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography variant="h5" sx={{ color: "primary.dark", fontWeight: 700 }}>
            Title of the Post
          </Typography>
        }
        subheader="September 14, 2016"
      />

      <CardContent>
        <Stack spacing={1}>
          <Grid container>
            <Grid item xs={6}>
              <Typography sx={{ color: "primary.dark", fontWeight: 700 }}>Job:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ color: "primary.dark" }}>Plumber</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography sx={{ color: "primary.dark", fontWeight: 700 }}>Location:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ color: "primary.dark" }}>Multan Chungi Chowk</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography sx={{ color: "primary.dark", fontWeight: 700 }}>Salary Offer:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ color: "primary.dark" }}>35k - 50k</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography sx={{ color: "primary.dark", fontWeight: 700 }}>Timings</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ color: "primary.dark" }}>9am to 5pm</Typography>
            </Grid>
          </Grid>
        </Stack>
      </CardContent>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ color: "primary.dark", fontWeight: 700 }}>Description:</Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ color: "primary.dark" }}>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardMedia>
        <Box
          sx={{
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          <img
            style={{ maxWidth: "100%", minHeight: "100%" }}
            src="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
        </Box>
      </CardMedia>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button sx={{ textTransform: "uppercase" }}>applications</Button>
      </CardActions>
    </Card>
  );
}
