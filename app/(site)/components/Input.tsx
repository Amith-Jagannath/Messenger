
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
    register:UseFormRegister<FieldValues>
}
const Input = () => {
  return (
    <div></div>
  )
}

export default Input