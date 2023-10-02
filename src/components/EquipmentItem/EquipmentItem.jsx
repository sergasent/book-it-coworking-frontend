import React from "react";
import PropTypes from "prop-types";
import "./EquipmentItem.scss";

export const EquipmentItem = ({ title, data }) => (
  <div className="equipment-item">
    <h3 className="equipment-item__title">{title}</h3>
    <ul className="equipment-item__list">
      {data?.map((item) => (
        <li className="equipment-item__list-item">
          <img className="equipment-item__img" src={item.img} alt="" />
          <p className="equipment-item__text">{item.text}</p>
        </li>
      ))}
    </ul>
  </div>
);
EquipmentItem.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf,
};

EquipmentItem.defaultProps = {
  title: undefined,
  data: undefined,
};
