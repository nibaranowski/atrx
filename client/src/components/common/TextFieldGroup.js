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
    <div className="form-group" style={{
      display: 'inline',
    }}>
      <div style={{
        // border: '2px blue solid',
        height: '50px',
        widht: '100%',
        lineHeight: '100%',
        //textAlign: 'center',
        verticalAlign: 'middle'
      }}>
        <label style={{
          fontSize: '14px',
          fontWeight: 'normal',
          fontStretch: 'normal',
          fontStyle: 'normal',
          lineHeight: 'normal',
          letterSpacing: '0.16px',
          color: '#3c3f54',
          lineHeight: '100%',
          verticalAlign: 'middle',
          // border: '1px green solid',
          marginTop: '15px'
        }}>
          {title}
        </label>
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
          style={{
            width: '85%',
            float: 'right',
            height: '40px',
            borderRadius: '3px',
            border: 'solid 1px #d7d7d7',
          }}
        />
      </div>
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
