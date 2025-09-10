import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      await register(name, email, password);
      navigate("/");
    } catch (e: any) {
      setErr(e.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-lg p-6 shadow-soft">
        <h2 className="text-xl font-semibold mb-4">Create account</h2>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="text-sm">Full name</label>
            <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="text-sm">Password</label>
            <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full border rounded px-3 py-2" />
          </div>
          {err && <div className="text-sm text-red-600">{err}</div>}
          <div>
            <button type="submit" disabled={loading} className="w-full bg-purple-600 text-white px-4 py-2 rounded">
              {loading ? "Creating…" : "Create account"}
            </button>
          </div>
        </form>

        <div className="mt-4 text-sm text-gray-600">
          Already have an account? <Link to="/login" className="text-purple-600">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
