import Navbar from "../../../components/layout/Navbar";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import Checkbox from "../../../components/common/Checkbox";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../../schemas/registerSchema";
import { asyncUserRegister } from "../../../store/actions/userActions";
import { useDispatch } from "react-redux";

const Register = () => {
  const navigate = useNavigate();
  const {register, handleSubmit, formState : {errors}} = useForm({resolver : zodResolver(registerSchema)});
  const dispatch = useDispatch()
  const onSubmit = (user) =>{
     console.log("userlll",user)
     const res =  dispatch(asyncUserRegister(user))
     console.log("res in register",res)
     if(res){
      navigate("/dashboard")
     } else {
      navigate("/");
     }
  }
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

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <Input label="Full Name"
            error={errors.name?.message}
            {...register("name")} />

            <Input
              label="Email Address"
              type="email"
              error={errors.email?.message}
              {...register("email")}
            />
{/* 
            <Input label="Mobile Number"
             error={errors.mobile?.message}
             {...register("mobile")} /> */}

            <Input
              label="Password"
              type="password"
              error={errors.password?.message}
              {...register("password")}
            />

            {/* <Checkbox
              label="I agree to Terms & Conditions"
            /> */}

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







// import { setUser } from "../../../store/reducers/userSlice";
// import axiosConfig from "../../../api/axiosConfig";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";

// const dispatch = useDispatch();

// const onSubmit = async (user) => {
//   try {
//     // 1. component calls the API directly
//     const { data } = await axiosConfig.post("/users", user);

//     // 2. success → put the user into Redux
//     dispatch(setUser(data));

//     // 3. UI reaction lives in the component, not Redux
//     navigate("/dashboard");
//   } catch (err) {
//     // 4. failure → show error, do NOT navigate
//     toast.error("Registration failed. Try again.");
//   }
// };