import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSucess,
  signInFailure,
} from "../redux/user/userSlice";
import axios from "axios";
export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    dispatch(signInStart());
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }

      // setLoading(false);
      // setError(null);
      dispatch(signInSucess(data));
      console.log(data);
      navigate("/");
    } catch (error) {
      // setLoading(false);
      // setError(data.message);
      dispatch(signInFailure(error.message));
    }
  };
  console.log(formData);
  return (
    <div className="mx-auto p-3 max-w-lg">
      <h1 className="text-3xl font-semibold text-center my-7">SIgn IN</h1>
      <form className=" flex flex-col  gap-4">
        <input
          type="email"
          placeholder="email"
          className=" border p-3 rounded-lg focus:outline-none"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className=" border p-3 rounded-lg focus:outline-none"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-400 p-3 rounded-lg hover:bg-slate-600 hover:text-white"
          onClick={handleSubmit}
        >
          {loading ? "Loading..." : "SIGN IN"}
        </button>
      </form>
      <div className="flex mt-2">
        <p>Don`t have an account ?</p>
        <Link to={"/signup"}>
          <span className="text-blue-600 pl-1">Sign up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};
