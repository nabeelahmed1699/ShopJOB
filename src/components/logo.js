import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import logo from "../../public/static/ShopJOB.svg";
import { Typography } from "@mui/material";
export const Logo = styled((props) => {
  const { variant, color, size, ...other } = props;

  // const color = variant === 'light' ? '#C1C4D6' : '#5048E5';
  if (size === "medium") {
    return (
      <Typography variant="h5" component="span" sx={{ color: color, zIndex: 10 }}>
        ShopJOB
      </Typography>
    );
  }
  if (size === "small") {
    return (
      <Typography variant="h6" component="span" sx={{ color: color, zIndex: 10 }}>
        ShopJOB
      </Typography>
    );
  }
  return (
    <Typography variant="h3" component="span" sx={{ color: color, zIndex: 10 }}>
      ShopJOB
    </Typography>
  );
})``;

Logo.defaultProps = {
  variant: "primary",
};

Logo.propTypes = {
  variant: PropTypes.oneOf(["light", "primary"]),
};
