import { Link, useNavigate } from "react-router-dom";
import LabeledInput from "../components/LabeledInput";
import Quote from "../components/Quote";
import { useState } from "react";
import { SignupInput } from "@rajeevroy/medium-common";
import { BACKEND_URL } from "../config";
import { toast } from "react-hot-toast";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";

const Signup = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    password: "",
    name: "",
  });

  async function sendRequest(e: any) {
    e.preventDefault();

    if (
      postInputs.email == "" ||
      postInputs.password == "" ||
      postInputs.name == ""
    ) {
      return toast.error("Please fill all inputs");
    }
    try {
      const response = await toast.promise(
        axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
          email: postInputs.email,
          password: postInputs.password,
          name: postInputs.name,
        }),
        {
          loading: "Signing in...",
          success: <b>Successfully signed in!</b>,
          error: <b>Failed to sign in. Please check your credentials.</b>,
        }
      );
      const jwt = await response.data.jwt;
      localStorage.setItem("authorization", "Bearer " + jwt);
      toast.success("Sign up success");
      navigate("/blogs");
    } catch (error) {
      toast.error("Invalid inputs");
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div>
          <Link to={"/"}>
            <button className="bg-black hover:bg-white border border-black hover:text-black text-white  rounded-md px-5 py-2.5 ml-[24%] mt-5">
              <div className="flex justify-center items-center gap-2">
                <IoMdArrowRoundBack /> Home
              </div>
            </button>
          </Link>
          <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center items-center flex-col">
              <div className="text-center w-full">
                <div className="text-3xl font-bold">Create an account</div>
                <div className="text-slate-400">
                  Already have and account ?
                  <Link to={"/signin"} className="underline pl-2">
                    {"Sign in"}
                  </Link>
                </div>
              </div>

              <div className="w-[50%] mt-2">
                <LabeledInput
                  label="Name"
                  placeholder="Rajeev"
                  onChange={(e) =>
                    setPostInputs((c) => ({
                      ...c,
                      name: e.target.value,
                    }))
                  }
                />
                <LabeledInput
                  label="Email"
                  placeholder="Rajeevroy70701@gmail.com"
                  onChange={(e) =>
                    setPostInputs((c) => ({
                      ...c,
                      email: e.target.value,
                    }))
                  }
                />
                <LabeledInput
                  label="Password"
                  type="password"
                  placeholder="Rajeev"
                  onChange={(e) =>
                    setPostInputs((c) => ({
                      ...c,
                      password: e.target.value,
                    }))
                  }
                />
                <button
                  type="button"
                  className="text-white bg-gray-800 w-full mt-6 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={sendRequest}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
          ;
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </>
  );
};

export default Signup;
