import React from "react";
import style from "./styles.module.scss";
interface SpinnerProps {
  className?: string;
}
const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return <div className={`${style.loader} ${className}`} />;
};
export default Spinner;
