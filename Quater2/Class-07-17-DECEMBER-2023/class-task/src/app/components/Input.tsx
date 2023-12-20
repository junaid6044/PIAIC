import React from 'react'
import { InputProps } from '../types/CommonTypes';

export default function Input(props: { attr: InputProps }) {
  const commonProps = {
    placeholder: props.attr.placeholder,
    className: 'w-full bg-gray-800 pl-6 p-2 rounded-3xl',
    name: props.attr.name,
    id: props.attr.id,
    autoComplete: props.attr.autoComplete,
    required: props.attr.required,
    onChange: props.attr.fun
  };

  if (props.attr.inputType === 'textarea') {
    return <textarea {...commonProps} rows={4}></textarea>;
  } else {
    return <input {...commonProps} type={props.attr.inputType} />;
  }
}
