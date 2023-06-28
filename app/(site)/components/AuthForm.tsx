"use client";
import { useCallback, useState } from "react";
import Input from "../components/inputs/Input";
import {BsGithub,BsGoogle} from 'react-icons/bs'
import React from "react";
import AuthSocialButton from "./AuthSocialButton";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "./Button";
type Variant = "LOGIN" | "REGISTER";
const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      //Axios Register
    }
    if (variant === "LOGIN") {
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
  };
  return (
    <div
      className="mt-8
  sm:mx-auto sm:w-full 
  sm:max-w-md"
    >
      <div
        className="bg-white
    px-4
    py-20
    shadow
    sm:rounded-lg sm-rounded-lg
    sm:px-10"
      >
        <form action="" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id="email"
              label="Email"
              register={register}
              errors={errors}
            />
          )}

          <Input
            id="email"
            label="Email"
            type="email"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
          />
          <Button disabled={isLoading} fullWidth type="submit">
            {variant === "LOGIN" ? "Sign-In" : "Register"}
          </Button>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div
              className="
                absolute
                inset-0 flex-column
                items-center"
            >
              <div
                className="w-full
                    border-t border-gray-300 "
              ></div>
              <div className="relative justify-center mx-auto text-center py-3 text-sm">
                <span className="bg-white px-2 text-gray-500">Or continue with </span>
              </div>
              <div className=" flex gap-2">
                <AuthSocialButton icon={BsGithub} onClick={()=> socialAction('github')}/>
                <AuthSocialButton icon={BsGoogle} onClick={()=> socialAction('github')}/>
            </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
