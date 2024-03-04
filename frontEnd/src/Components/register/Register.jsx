import React from "react";

function Register() {
  return (
    <div className="flex flex-col  justify-center items-center py-5">
      <div className="container mx-auto">
        <form>
          <div className="flex flex-col justify-center  bg-gray-100 px-10 rounded-md">
            <h1 className="text-center pt-3 text-[20px] font-bold">Login </h1>
            <div className="flex flex-col">
              <label className="text-[20px] mb-2">Email</label>
              <input
                type="text"
                className="pl-2 py-2 rounded-md"
                placeholder="Enter your Email"
              />
            </div>

            <div className="flex flex-col mt-2">
              <label className=" text-[20px]">Password</label>
              <input type="password" className="pl-2 py-2 rounded-md" />
            </div>

            <div className="flex justify-center items-center py-3">
              <button className="bg-blue-500 px-5 py-2 text-white rounded-md">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
      <div />
    </div>
  );
}

export default Register;
