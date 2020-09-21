import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleTextField = styled(TextField)`
  .MuiFilledInput-adornedStart {
    font-size: 1.4rem;
  }
  .MuiIcon-root {
    font-size: 2rem;
  }
  .MuiInputAdornment-filled.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel) {
    margin-top: 0;
  }
  .MuiInputAdornment-positionStart {
    margin-right: ${(props) => (props.icon ? '8px' : '0px')};
  }
  .MuiFilledInput-root.Mui-focused {
    background-color: ${(props) =>
      props.primary === 'primary' ? '#fff' : '#20232e'};
  }
  .MuiFormHelperText-root.Mui-error {
    font-size: 1.2rem;
    margin: 1rem 0 0;
  }
`;

const setIcon = (props) => {
  const { icon } = props;
  return <Icon>{icon}</Icon>;
};

const onInputChange = () => {};

const TextFieldComponent = (props) => {
  const {
    icon,
    placeholder,
    onChange,
    value,
    fullWidth,
    multiline,
    color,
    variant,
    rows,
    type,
    helperText,
    error,
  } = props;
  const [touched, setTouched] = useState(false);

  const handleTouch = () => {
    setTouched(true);
  };
  return (
    <StyleTextField
      icon={icon}
      placeholder={placeholder}
      value={value}
      primary={color}
      fullWidth={fullWidth}
      multiline={multiline}
      color={color}
      rows={rows}
      variant={variant || 'filled'}
      type={type}
      onBlur={handleTouch}
      error={(touched && Boolean(value.length === 0)) || error}
      helperText={touched && Boolean(value.length === 0) && helperText}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {icon && setIcon({ ...props })}
          </InputAdornment>
        ),
      }}
      onChange={onChange || ((e) => onInputChange(e))}
    />
  );
};

TextFieldComponent.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  multiline: PropTypes.bool,
  fullWidth: PropTypes.bool,
  color: PropTypes.string,
  variant: PropTypes.string,
  rows: PropTypes.number,
  type: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
};

TextFieldComponent.defaultProps = {
  icon: '',
  value: '',
  multiline: false,
  fullWidth: false,
  color: 'primary',
  variant: 'filled',
  rows: 5,
  type: 'text',
  helperText: '',
  error: false,
};

setIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default TextFieldComponent;
