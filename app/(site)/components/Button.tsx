'use-client'
import clsx from 'clsx'
interface ButtonProps{
    type?:'button'| 'submit'|'reset'|undefined;
    fullWidth?:boolean
    children?:React.ReactNode;
    onClick?:()=> void;
    secondary?:boolean;
    danger?:boolean;
    disabled?:boolean;
}

const Button:React.FC<ButtonProps>  =({
    type,
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled

})=>{
    return (
        <button
        className={clsx(`px-3
         py-2 
         rounded-sm 
         flex
         justify-center'
            type={type}
           
            onClick={onClick}
            secondary={secondary}
            danger={danger}
            disabled={disabled}`,
            disabled && "opacity-50 cursor-default",
            fullWidth && "w-full",
            secondary? "text-gray-900":"text-white",
            danger && "bg-red-500 hover:bg-rose-600 focus-visible:outline-rose-600",
            !secondary && !danger && "bg-sky-500  hover:bg-sky-600 focus-visible:outline-sky-blue"            

            )}
            >
            {children}
        </button>
    );
}


export default Button