import React, { useState } from "react";
import PropTypes from 'prop-types';
import { IconButton, Menu, MenuItem, Divider } from '@mui/material';
import { MdMoreVert } from "react-icons/md";

const DropdownMenu = ({ menu, style, icon, iconSize }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (!menu.length) return false;

    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(null);
  };

  const renderMenuItem = (item, index) => {
    if (item.divider) return <Divider />

    const elProps = {
      key: `menu-item-${index}`,
      disableRipple: true
    };

    if (!item.containerElement && item.onClick) {
      elProps.onClick = item.onClick;
    }

    return <MenuItem {...elProps} disabled={item.disabled || false}>{item.label}</MenuItem>
  }

  return menu ? (
    <>
      <IconButton
        onClick={handleClick}
        style={{
          ...style.button
        }}
        disableRipple
        size={iconSize}
        disabled={!menu.length}
      >
        {icon ? icon : <MdMoreVert />}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
            ...style.menu
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {menu && menu.map((item, index) => renderMenuItem(item, index))}
      </Menu>
    </>
  ) : null;
}

DropdownMenu.propTypes = {
  menu: PropTypes.array.isRequired,
  style: PropTypes.object,
  icon: PropTypes.any,
  iconSize: PropTypes.oneOf(['', 'small', 'large'])
};

DropdownMenu.defaultProps = {
  style: {},
  iconSize: ''
}

export default DropdownMenu;