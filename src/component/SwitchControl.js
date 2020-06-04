import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const SwitchControl = (props) => {
  const {
    checkedA,
    onChange
  } = props;

  return (
    <FormControlLabel
      control={
        <Switch
          checked={checkedA}
          onChange={onChange}
          name="tiene_tarjeta"
        />
      }
      label="Tiene Tarjeta"
    />
  )
}

export default SwitchControl;