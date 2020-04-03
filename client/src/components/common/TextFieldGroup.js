import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
    name,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    icon,
    title,
    onChange,
    disabled
}) => (
    <div className="form-group">
      <label>{title}</label>
      <input
        type={type}
        className={classnames('form-control', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form=text text-muted">{info}</small>}
      {error && (
        <div className="invalid-feedback">{error}</div>
      )}
    </div>

);

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    icon: PropTypes.string,
    title: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string,
}

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;
