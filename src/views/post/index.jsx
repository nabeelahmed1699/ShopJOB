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
import { Button } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({
  id,
  userPic,
  username,
  title,
  ImgSrc,
  date,
  liked,
  postDescription,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        action={<DotMenu options={[{ label: "Report", icon: <FlagIcon /> }]} />}
        title={title || "Shrimp and Chorizo Paella"}
        subheader={date || "September 14, 2016"}
      />
      <CardMedia
        component="img"
        height="254"
        image={
          ImgSrc ||
          "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        }
        alt={title || "Paella dish"}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {postDescription ||
            "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Tooltip title={liked ? "unlike" : "like"} arrow>
            <FavoriteIcon sx={{ color: liked ? red[900] : "" }} />
          </Tooltip>
        </IconButton>
        <IconButton aria-label="share">
          <Tooltip title="share" arrow>
            <ShareIcon />
          </Tooltip>
        </IconButton>
        <Button sx={{ ml: "auto", color: "accent.default" }}>Apply</Button>
      </CardActions>
    </Card>
  );
}
