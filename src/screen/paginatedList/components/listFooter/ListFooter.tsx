import React from "react";
import Button from "../../../../components/button/Button";
import "./ListFooter.css";
import {
  MdFastRewind,
  MdNavigateBefore,
  MdNavigateNext,
  MdFastForward,
} from "react-icons/md";

type ListFooterProps = {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  onStart: () => void;
  onEnd: () => void;
};

const ListFooter = (props: ListFooterProps) => {
  const { currentPage, totalPages, onPrevious, onNext, onStart, onEnd } = props;
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  const prevDisabled = isFirst;
  const startDisabled = isFirst;
  const nextDisabled = isLast;
  const endDisabled = isLast;

  return (
    <div className="footer-container">
      <Button
        title="Go to start"
        onClick={onStart}
        isdisabled={startDisabled}
        className="btn-start-end"
      >
        <MdFastRewind size={20} />
      </Button>
      <Button
        title="previous"
        onClick={onPrevious}
        isdisabled={prevDisabled}
        className="btn-prev-next"
      >
        <MdNavigateBefore size={20} />
      </Button>
      <div>{currentPage}</div>
      <Button
        title="next"
        onClick={onNext}
        isdisabled={nextDisabled}
        className="btn-prev-next"
      >
        <MdNavigateNext size={20} />
      </Button>
      <Button
        title="go to Last"
        onClick={onEnd}
        isdisabled={endDisabled}
        className="btn-start-end"
      >
        <MdFastForward size={20} />
      </Button>
    </div>
  );
};

export default React.memo(ListFooter);
