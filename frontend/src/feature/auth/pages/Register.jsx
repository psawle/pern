import Navbar from "../../../components/layout/Navbar";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import Checkbox from "../../../components/common/Checkbox";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />

      <div
        className="
        min-h-[calc(100vh-64px)]
        bg-gray-50
        flex
        justify-center
        items-center
        px-4
      "
      >
        <div
          className="
          bg-white
          rounded-xl
          shadow-md
          p-8
          w-full
          max-w-md
        "
        >
          <h1 className="text-4xl font-bold text-center">
            Create an Account
          </h1>

          <p
            className="
            text-center
            text-gray-500
            mt-2
            mb-8
          "
          >
            Join LuxeCommerce for premium shopping
          </p>

          <form className="space-y-5">
            <Input label="Full Name" />

            <Input
              label="Email Address"
              type="email"
            />

            <Input label="Mobile Number" />

            <Input
              label="Password"
              type="password"
            />

            <Checkbox
              label="I agree to Terms & Conditions"
            />

            <Button type="submit">
              Create Account →
            </Button>
          </form>

          <p className="text-center mt-6">
            Already have an account?
            <span
            onClick={() => navigate("/")}
              className="
              text-[var(--primary)]
              font-semibold
              ml-1
            "
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;