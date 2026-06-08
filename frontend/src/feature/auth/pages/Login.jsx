import Navbar from "../../../components/layout/Navbar";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import Divider from "../../../components/common/Divider";
import Checkbox from "../../../components/common/Checkbox";

const Login = () => {
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
            Welcome Back
          </h1>

          <p
            className="
            text-center
            text-gray-500
            mt-2
            mb-6
          "
          >
            Please enter your details
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              className="
              border
              py-3
              rounded-lg
            "
            >
              Google
            </button>

            <button
              className="
              border
              py-3
              rounded-lg
            "
            >
              Apple
            </button>
          </div>

          <Divider />

          <form className="space-y-5 mt-6">
            <Input
              label="Email"
              type="email"
            />

            <Input
              label="Password"
              type="password"
            />

            <Checkbox
              label="Remember me for 30 days"
            />

            <Button type="submit">
              Login
            </Button>
          </form>

          <p className="text-center mt-6">
            Don't have an account?
            <span
              className="
              text-[var(--primary)]
              font-semibold
              ml-1
            "
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;