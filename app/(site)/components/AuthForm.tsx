'use client';
import { useCallback, useState, } from 'react';

import React from 'react'
import { useForm ,FieldValues,SubmitHandler} from 'react-hook-form';
type Variant = 'LOGIN' | 'REGISTER'
const AuthForm = () => {
    const [variant,setVariant] = useState<Variant>('LOGIN');
const [isLoading,setIsLoading]  = useState(false);
const toggleVariant = useCallback(() =>{
    if(variant==='LOGIN'){
        setVariant('REGISTER');
    }
        else{
            setVariant('LOGIN');
        }
    
},[variant])

const {
    register,
    handleSubmit,
    formState:{

    }
} = useForm<FieldValues>({
    defaultValues:{
        name:'',
        email:'',
        password:''
    }
});
const onSubmit: SubmitHandler<FieldValues> =(data)=>{
    setIsLoading(true);
    if(variant==='REGISTER'){
        //Axios Register
    }
    if(variant==='LOGIN'){
    }
}

const socialAction = (action:string)=>{
    setIsLoading(true);
}
  return (
  <div className="mt-8
  sm:mx-auto sm:w-full 
  sm:max-w-md">
    <div className="bg-white
    px-4
    py-8
    shadow
    sm:rounded-lgsm-rounded-lg
    sm:px-10">
        <form action="" className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <Input/>
        </form>
    </div>
  </div>
  )
}

export default AuthForm


