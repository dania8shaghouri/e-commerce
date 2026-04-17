import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] gap-6 text-center">
      {/* SUCCESS ICON */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      {/* TEXT */}
      <h1 className="text-2xl font-semibold text-gray-800">
        Your order has been successfully placed.
      </h1>

      {/* BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="mt-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primaryHover transition font-medium"
      >
        Back to Home
      </button>
    </div>
  );
};

export default SuccessPage;
