import { IconButton as IconButtonMUI } from "@material-ui/core";

function IconButton (props) {
    const handleClick = (event) => {
        if (props.checkPageRange()) {
            props.changeToPageNumber({type: `${props.pageDirection}`});
        }
    }
    return (
        <IconButtonMUI onClick={handleClick}>
            {props.children}
        </IconButtonMUI>
    )
}

export default IconButton;