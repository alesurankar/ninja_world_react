import AuthForm from './AuthForm';

interface Props {
  onClose: () => void;
}

const AuthModal = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal box */}
      <div className="bg-green-200 rounded-xl p-8 relative w-full max-w-md">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Auth form */}
        <AuthForm className="rounded-xl p-8 w-96 min-h-[28rem]"/>
      </div>
    </div>
  );
};

export default AuthModal;
