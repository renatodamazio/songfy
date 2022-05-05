import React from "react";

interface InputProfile {
  label?: string;
  id: string;
  name: string;
  className?: string;
  type?: string;
  placeholder?: string;
  onInput?: any;
  onFocus?: any;
  onBlur?: any;
  onLeave?: any;
  element?:any;
}

export default function Input(props: InputProfile) {
  return (
    <div className="w-full">
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input
        {...props}
        className={`${
          props?.className ? props.className : ``
        } w-full p-2 rounded-md text-black font-bold border-2 border-black-500 focus:border-purple transition-all focus:shadow-pink shadow-lg`}
      />
    </div>
  );
}
