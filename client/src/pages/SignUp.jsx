import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
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

      setLoading(false);
      setError(null);
      console.log(data);
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(data.message);
    }
  };
  console.log(formData);
  return (
    <div className="mx-auto p-3 max-w-lg">
      <h1 className="text-3xl font-semibold text-center my-7">SIgn UP</h1>
      <form className=" flex flex-col  gap-4">
        <input
          type="text"
          placeholder="username"
          className=" border p-3 rounded-lg focus:outline-none"
          id="username"
          onChange={handleChange}
        />
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
          {loading ? "Loading..." : "SIGN UP"}
        </button>
        <button className="bg-slate-400 p-3 rounded-lg hover:bg-slate-600 hover:text-white">
          Google
        </button>
      </form>
      <div className="flex mt-2">
        <p>have an account ?</p>
        <Link to={"/signin"}>
          <span className="text-blue-600 pl-1">Sign in</span>
        </Link>
      </div>
    </div>
  );
};
