import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 900
    }
});

function valuetext(value) {
    return `${value}°C`;
}

const RangeSlider = () => {
    const classes = useStyles();
    const [value,
        setValue] = React.useState([20, 70]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}/>
        </div>
    );
}

export default RangeSlider;