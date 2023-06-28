import {IconType} from 'react-icons'

interface AuthSocuialButtonProps{
    icon:IconType;
    onClick:()=>void;
}



const AuthSocialButton: React.FC<AuthSocuialButtonProps> = ({
    icon:Icon,
    onClick
}) => {
  return (
    <button
    className='
    inline-flex
    w-full
    justify-center
    rounded-button
    bg-white
    px-4
    py-2
    text-gray-500
    shadow-sm
    ring-1ring-inset
    ring-gray-300
    '
    >
     <Icon/>
    </button>
  )
}

export default AuthSocialButton