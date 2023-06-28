'use client'
import clsx from 'clsx'

import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form'
interface InputProps{
    label:string;
    id:string;
    type?:string;
    required?:boolean;
    register:UseFormRegister<FieldValues>;
    errors:FieldErrors;
    disabled?:boolean;
}

const Input:React.FC<InputProps> =({
  label,
  id,
  required,
  register,
  errors,
  disabled
})  => {
  return (
    <div>
      <label htmlFor={id}
      // className='block text-sm font-meduim  leading-6 text-gray-900'
      >{label}</label>
      <div className="mt-2">
        <input 
         id={id} 
        //  type={type}
        className={clsx(`
         form-input
         block
         w-full
         rounded-md
         border-0
         py-1.5text-gray-900
         ring-1
         shadow-sm
         ring-insert
         ring-gray-300
         placeholder:text-gray-400focus:ring-2
         focus:ring-insetfocus:ring-sky-600
         sm:text-sm
         sm:leading-6
        `,errors[id] && "focus:ring-rose-500",
      disabled && "opacity50 cursor-default")}
         autoComplete={id}
          disabled={disabled}
          {...register(id,{required})}
        />
        
      </div>
      <button>Test me</button>
    </div>
  )
}

export default Input