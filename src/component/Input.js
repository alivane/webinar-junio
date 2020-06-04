import React from 'react';
import TextField from '@material-ui/core/TextField';


const Input = (props) => {
    const { placeholder, label, onChange, value, name } = props;
    return (
        <TextField
            label={label}
            style={{ margin: 8 }}
            placeholder={ placeholder }
            fullWidth
            name={ name }
            value={ value} 
            onChange={onChange}
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
        />
    )
}

export default Input;
