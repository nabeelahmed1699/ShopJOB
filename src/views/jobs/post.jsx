import * as React from "react";
import DotMenu from "./menu/menu";

// MUI Components
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";
// icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FlagIcon from "@mui/icons-material/Flag";
import { Box, Button, Grid } from "@mui/material";

export default function PostCard({
  id,
  userPic,
  username,
  title,
  ImgSrc,
  date,
  liked,
  postDescription,
}) {
  return (
    <Card
      sx={{
        boxShadow: "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
        background: "accent.default",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "primary" }} aria-label="job" src={userPic} alt={username} />
        }
        // action={<DotMenu options={[{ label: "Report", icon: <FlagIcon /> }]} />}
        title={title || "Tanzeela Farooq"}
        subheader={date || "September 14, 2016"}
      />
      <CardContent>
        <Box>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark", fontWeight: 700 }}>
                Job:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark" }}>
                Plumber
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark", fontWeight: 700 }}>
                Location:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark" }}>
                Multan Chungi Chowk
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark", fontWeight: 700 }}>
                Salary offer:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark" }}>
                25k-30k
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark", fontWeight: 700 }}>
                Timings:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.dark" }}>
                9am - 5pm
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 6 }}>
          <Typography variant="body2" sx={{ color: "primary.dark", fontWeight: 700 }}>
            Description:
          </Typography>
          <Typography variant="body2" color="primary.dark">
            {postDescription ||
              "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}
          </Typography>
        </Box>
      </CardContent>
      <CardMedia
        component="img"
        height="254"
        image={
          ImgSrc ||
          "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        }
        alt={title || "Paella dish"}
      />

      <CardActions disableSpacing>
        <Button
          sx={{
            ml: "auto",
            py: 1,
            px: 4,
            color: "accent.default",
            background: "rgba(222, 121, 64, 0.2)",
            "&:hover": {
              background: "rgba(222, 121, 64, 0.3)",
            },
          }}
        >
          Apply
        </Button>
      </CardActions>
    </Card>
  );
}
