import React from "react";
import "./ListHeader.css";

type ListHeaderProps = {
  title: string;
  currentPage: number;
  totalPages: number;
};

const ListHeader = (props: ListHeaderProps) => {
  const { title, currentPage, totalPages } = props;

  return (
    <div className="card-header">
      <h2 className="card-title">{title}</h2>
      <p className="card-subTitle">
        Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
      </p>
    </div>
  );
};

export default React.memo(ListHeader);
