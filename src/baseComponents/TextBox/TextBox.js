import { TextField, FormControl, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

function TextBox (props) {
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl}>
            <TextField
                label={props.name}
                id={props.id}
                name={props.name}
                defaultValue={props.value}
                onChange={props.userTextChange}
                helperText={props.helperText}
                error={false}
            />
        </FormControl>
    )
}

export default TextBox;