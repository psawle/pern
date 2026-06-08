import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../schemas/loginSchema.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "../../store/actions/userActions.jsx";
import { useDispatch } from "react-redux";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({resolver: zodResolver(loginSchema)});
  const dispatch = useDispatch()
  const onSubmit = (user) => {
    console.log(user);
     dispatch(loginUser(user))
  };

  return (
    <div className=" flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div>
            <input
              type="email"
              placeholder="Enter Email"
              {...register("email")}
              className="w-full border p-3 rounded-md"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter Password"
              {...register("password")}
              className="w-full border p-3 rounded-md"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            className="w-full bg-black text-white py-3 rounded-md"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-5">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold"
          >
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;