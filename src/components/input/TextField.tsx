import React, { useLayoutEffect, useRef, useState } from "react";

interface InputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextField: React.FC<InputProps> = ({ children, ...props }) => {
  const [height, setHeight] = useState<number | undefined>(0);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  
  useLayoutEffect(() => {
    setHeight(textareaRef.current?.scrollHeight);
  }, [children]);

  return (
    <textarea
      ref={textareaRef}
      defaultValue={children as string}
      style={{ height: `${height}px` }}
      {...props}
    />
  );
};
export default TextField;
