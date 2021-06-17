import { Select as SelectMUI, InputLabel, MenuItem, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

function Select (props) {
    const classes = useStyles();

    const handleChange = (event) => {
        props.categoryChange({type: 'category', payload: event.target.value});
    }
    return (
        <>
            <FormControl className={classes.formControl}>
                <InputLabel
                    id={props.selectLabelId}
                >
                    {props.name}
                </InputLabel>
                <SelectMUI
                    labelId={props.labelId}
                    id={props.id}
                    value={props.value}
                    name={props.name}
                    onChange={handleChange}
                
                >
                    {props.options.map((option, index) => (
                        <MenuItem
                            key={`${option.value}-${index}`}
                            value={option.value}
                        >
                            {option.term}
                        </MenuItem>
                    ))}
                </SelectMUI>
            </FormControl>
        </>
    )
}

export default Select;