import React from "react";

const Button = ({value, className, icon, onClick}) => {
  return (
    <div className={className} onClick={onClick}>
      {icon ? <i className={icon} />: ''}
      <span>{value}</span>
    </div>
)


};
export default Button;
