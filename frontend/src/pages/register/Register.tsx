import { useState } from "react";

type RegisterData = {
  name: string;
  email: string;
  password: string;
  role: string;
};

const Register = () => {
  const [formData, setFormData] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      console.log("Response:", data);
      alert("User registered successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-[400px]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Username</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Role */}
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;