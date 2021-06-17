import { TextField, FormControl, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

function TextBox (props) {
    const classes = useStyles();

    const handleChange = (event) => {
        props.userTextChange({type: 'searchText', payload: event.target.value})
    }
    return (
        <FormControl className={classes.formControl}>
            <TextField
                label={props.name}
                id={props.id}
                name={props.name}
                defaultValue={props.value}
                onChange={handleChange}
                helperText={props.helperText}
                error={false}
            />
        </FormControl>
    )
}

export default TextBox;