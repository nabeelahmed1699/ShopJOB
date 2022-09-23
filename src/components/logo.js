import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import logo from '../../public/static/ShopJOB.svg'
export const Logo = styled((props) => {
  const { variant,color, ...other } = props;

  // const color = variant === 'light' ? '#C1C4D6' : '#5048E5';

  return (
    // <img src='logo'/>
    <h1 sx={{color:color}}>ShopJOB</h1>
  );
})``;

Logo.defaultProps = {
  variant: 'primary'
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['light', 'primary'])
};
