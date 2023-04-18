import PropTypes from 'prop-types';
const Logo = ({ width, maxWidth }) => {
  // return <Image src={LogoImg} style={{ width: width, maxWidth: maxWidth }} fluid />
  return (
    'LOGO'
  )
}

Logo.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
};

Logo.defaultProps = {
  title: "",
  width: '100px',
  maxWidth: '100%'
}

export default Logo;