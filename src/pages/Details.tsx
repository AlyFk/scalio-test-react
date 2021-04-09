import React from "react";
import { ReactComponent as ArrowIcon } from "assets/arrow-back.svg";
import TextField from "components/input/TextField";
import { usePost } from "hooks";

interface DetailsProps {
  changePage: (page: "home" | "detail") => void;
}

const Details: React.FC<DetailsProps> = ({ changePage }) => {
  const { post } = usePost();
  const handleBack = () => {
    changePage("home");
  };

  return (
    <div>
      <div className="post">
        <div className="back-btn" onClick={handleBack}>
          <ArrowIcon fill="#1ac8ed" className="back-btn__icon" />
        </div>
        <h2 className="post__title line-border">{post?.title}</h2>
        <TextField contentEditable={false} className="post__body line-border">
          {post?.body}
        </TextField>
      </div>
    </div>
  );
};

export default Details;
