import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card as CardMUI } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { findByLabelText } from '@testing-library/react';

const useStyles = makeStyles({
  root: {
    maxWidth: '80%',
    marginTop: 5
  },
  media: {
    height: 140,
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
  }
});

function Card(props) {
  const classes = useStyles();

  return (
    <CardMUI className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.avatar}
          title={props.userName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Email: {props.email ? props.email :  'NA'}
          </Typography>
          <Typography color="textSecondary" component="p">
            Name: {props.realName ? props.realName :  'NA'}
          </Typography>
          <Typography color="textSecondary" component="p">
            Location: {props.location ? props.location :  'NA'}
          </Typography>
          <Typography color="textSecondary" component="p">
            Repository Count: {props.repoCount ? props.repoCount :  'NA'}
          </Typography>
          <Typography color="textSecondary" component="p">
            Account Created: {props.accountCreationDate ? props.accountCreationDate.substring(0,10) :  'NA'}
          </Typography>
          <Typography color="textSecondary" component="p">
            Account Updated: {props.accountUpdateDate ? props.accountUpdateDate.substring(0,10) :  'NA'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <a href={`${props.profileLink}`}>
          View Profile
        </a>
      </CardActions>
    </CardMUI>
  );
}

export default Card;