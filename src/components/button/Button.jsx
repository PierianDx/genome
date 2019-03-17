/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Button.module.scss';

export const Button = ({
  as = 'button',
  size,
  state,
  isStatic,
  rounded,
  outlined,
  inverted,
  fullwidth,
  loading,
  text,
  asDelete,
  className,
  children,
  ref,
  ...props
}) => {
  const classes = cx(className, {
    [`is-${size}`]: size,
    [`is-${state}`]: state,
    'is-static': isStatic,
    'is-rounded': rounded,
    'is-outlined': outlined,
    'is-inverted': inverted,
    'is-fullwidth': fullwidth,
    'is-loading': loading,
    'is-text': text,
    button: !asDelete,
    delete: !!asDelete
  });
  const Element = as;

  return (
    <Element ref={ref} className={classes} {...props}>
      {children}
    </Element>
  );
};

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
  state: PropTypes.oneOf(['hovered', 'focused', 'active', 'disabled']),
  isStatic: PropTypes.bool,
  rounded: PropTypes.bool,
  outlined: PropTypes.bool,
  inverted: PropTypes.bool,
  fullwidth: PropTypes.bool,
  loading: PropTypes.bool,
  text: PropTypes.bool,
  asDelete: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  ref: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};
Button.defaultProps = {
  as: 'button',
  size: null,
  state: null,
  isStatic: false,
  rounded: false,
  outlined: false,
  inverted: false,
  fullwidth: false,
  loading: false,
  text: false,
  asDelete: false,
  className: '',
  children: null,
  ref: null
};

export default React.forwardRef((props, ref) => <Button ref={ref} {...props} />);
