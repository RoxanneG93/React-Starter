import React from "react";
import PropTypes from "prop-types";
// YOU CAN ALSO MAKE JUST FUNCTIONAL COMPONENTS If you don't plan to use state
const Header = props => {
  return (
    <div>
      <h1>{props.branding}</h1>
    </div>
  );
};

// you can set default Props object **if you set same attribute on component it will override

Header.defaultProps = {
  branding: "My App"
};

// You can type cast with setting propTypes
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
