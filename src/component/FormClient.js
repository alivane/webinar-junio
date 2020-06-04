import React from 'react';
import Input from './Input';

const FormClient = (props) => {
  const {
    formData,
    client,
    onChange
  } = props
  return (
    <div>
      {
        formData.map(data => {
          return (
            <Input
              key={data.label}
              label={data.label}
              placeholder={data.placeholder}
              name={data.name}
              value={client[data.name]}
              onChange={onChange}
            />
          )
        })
      }
    </div>
  )
}

export default FormClient;
