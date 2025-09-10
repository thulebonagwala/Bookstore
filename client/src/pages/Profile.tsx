import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  if (!user) {
    return <div>Please login to view your profile.</div>;
  }

  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-semibold">Profile</h2>
      <div className="bg-white rounded-lg p-6 mt-4 shadow-soft">
        <div className="text-sm text-gray-500">Name</div>
        <div className="font-medium">{user.name}</div>

        <div className="mt-4 text-sm text-gray-500">Email</div>
        <div className="font-medium">{user.email}</div>

        <div className="mt-6">
          <h3 className="font-medium">Order history</h3>
          <div className="mt-2 text-sm text-gray-500">No orders yet (mock mode).</div>
        </div>
      </div>
    </div>
  );
}
