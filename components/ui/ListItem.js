import React, { useState } from "react";

import Link from "next/link";
import PropTypes from "prop-types";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Fade from "@mui/material/Fade";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const ListItem = ({ dependency }) => {
  const [show, setShow] = useState(false);

  const handleShowIcon = () => {
    setShow(true);
  };

  const handleHideIcon = () => {
    setShow(false);
  };

  return (
    <Link href={dependency.website} passHref={true}>
      <ListItemStyled
        onMouseEnter={handleShowIcon}
        onMouseLeave={handleHideIcon}
        disableRipple
        className="ListItem"
        component="a"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItemText
          primary={
            <Typography
              variant="body1"
              component="h3"
              color="common.black"
              fontWeight="bold"
            >
              {dependency.name}
            </Typography>
          }
        />
        <Fade in={show}>
          <OpenInNewIcon className="icon" />
        </Fade>
      </ListItemStyled>
    </Link>
  );
};

const ListItemStyled = styled(ListItemButton)(({ theme }) => ({
  paddingLeft: theme.spacing(0),
  borderRadius: theme.spacing(1),
  transition: theme.transitions.create("padding-left", {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeInOut,
  }),

  "& .icon path": {
    fill: theme.palette.primary.main,
    transition: theme.transitions.create(["fill"], {
      duration: theme.transitions.duration.longest,
    }),
  },
  "&:hover": {
    paddingLeft: theme.spacing(2),
  },
}));

ListItem.propTypes = {
  dependency: PropTypes.shape({
    name: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListItem;
