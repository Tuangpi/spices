import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ data }) => {
  return (
    <div className="flex items-center font-medium py-2 mb-12 text-sm">
      {data &&
        data.map((da, index) => (
          <React.Fragment key={index}>
            <Link to={da.link} className="text-gray-500 hover:text-gray-700">
              {da.name}
            </Link>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="font-Montserrat mx-3"
            />
          </React.Fragment>
        ))}
      <span className="text-gray-700 cursor-default">Current Page</span>
    </div>
  );
};

export default BreadCrumb;
