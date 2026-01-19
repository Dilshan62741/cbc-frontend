import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleRegister(e) {
    e?.preventDefault();

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      toast.error("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      // IMPORTANT:
      // We do NOT send role, img, isBlocked (backend should set defaults).
      await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/createUser", {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim().toLowerCase(),
        password,
      });

      toast.success("Account created. Please log in.");
      navigate("/login");
    } catch (e) {
      toast.error(e?.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-screen h-screen bg-[url('loginBg.jpg')] bg-cover bg-center flex">
      <div className="w-1/2 h-full" />

      <div className="w-1/2 h-full flex justify-center items-center px-6">
        <form
          onSubmit={handleRegister}
          className="w-[500px] min-h-[520px] backdrop-blur-md rounded-[20px] shadow-xl flex flex-col justify-center items-center p-8"
        >
          <h1 className="text-[28px] font-bold text-white mb-6">Create account</h1>

          <div className="w-full grid grid-cols-2 gap-3">
            <div>
              <label className="text-white text-sm">First name</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="w-full h-[50px] mt-2 mb-2 px-4 rounded-[10px] border-2 border-slate-400 bg-white outline-none"
              />
            </div>

            <div>
              <label className="text-white text-sm">Last name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                className="w-full h-[50px] mt-2 mb-2 px-4 rounded-[10px] border-2 border-slate-400 bg-white outline-none"
              />
            </div>
          </div>

          <div className="w-full mt-3">
            <label className="text-white text-sm">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@example.com"
              className="w-full h-[50px] mt-2 mb-4 px-4 rounded-[10px] border-2 border-slate-400 bg-white outline-none"
            />
          </div>

          <div className="w-full">
            <label className="text-white text-sm">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Create a password"
              className="w-full h-[50px] mt-2 mb-4 px-4 rounded-[10px] border-2 border-slate-400 bg-white outline-none"
            />
          </div>

          <div className="w-full">
            <label className="text-white text-sm">Confirm password</label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Re-enter password"
              className="w-full h-[50px] mt-2 mb-6 px-4 rounded-[10px] border-2 border-slate-400 bg-white outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="text-white bg-blue-500 w-full h-[50px] rounded-[10px] border-2 border-blue-600 cursor-pointer disabled:opacity-60"
          >
            {loading ? "Creating..." : "Register"}
          </button>

          <p className="text-white mt-5 text-sm">
            Already have an account?{" "}
            <Link className="underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
