import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card as CardMUI } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    marginTop: 5
  },
  media: {
    height: 240,
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
            <span><b>Email: </b></span><span>{props.email ? props.email :  'NA'}</span>
          </Typography>
          <Typography color="textSecondary" component="p">
            <span><b>User Name: </b></span><span>{props.userName ? props.userName :  'NA'}</span>
          </Typography>
          <Typography color="textSecondary" component="p">
            <span><b>Name: </b></span><span>{props.realName ? props.realName :  'NA'}</span>
          </Typography>
          <Typography color="textSecondary" component="p">
            <span><b>Location: </b></span><span>{props.location ? props.location :  'NA'}</span>
          </Typography>
          <Typography color="textSecondary" component="p">
            <span><b>Repository Count: </b></span><span>{props.repoCount ? props.repoCount :  'NA'}</span>
          </Typography>
          <Typography color="textSecondary" component="p">
            <span><b>Account Created: </b></span><span>{props.accountCreationDate ? props.accountCreationDate.substring(0,10) :  'NA'}</span>
          </Typography>
          <Typography color="textSecondary" component="p">
            <span><b>Account Updated: </b></span><span>{props.accountUpdateDate ? props.accountUpdateDate.substring(0,10) :  'NA'}</span>      
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <a href={`${props.profileLink}`} rel="noreferrer" target="_blank">
          View Profile
        </a>
      </CardActions>
    </CardMUI>
  );
}

export default Card;