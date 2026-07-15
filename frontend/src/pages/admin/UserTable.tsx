import { deleteUser } from "../../services/adminService";

type User = {
  id: string;
  fullName: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
};

type Props = {
  users: User[];
  refresh: () => void;
};

export default function UserTable({
  users,
  refresh,
}: Props) {

  async function handleDelete(id: string) {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      await deleteUser(id);
      refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to delete user");
    }
  }

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">

      <table className="min-w-full">

        <thead className="bg-gray-100">

          <tr>
            <th className="px-6 py-4 text-left">Name</th>

            <th className="px-6 py-4 text-left">Email</th>

            <th className="px-6 py-4 text-left">Role</th>

            <th className="px-6 py-4 text-left">Status</th>

            <th className="px-6 py-4 text-left">Created</th>

            <th className="px-6 py-4 text-center">Action</th>
          </tr>

        </thead>

        <tbody>

          {users.length === 0 ? (

            <tr>
              <td
                colSpan={6}
                className="py-8 text-center text-gray-500"
              >
                No users found.
              </td>
            </tr>

          ) : (

            users.map((user) => (

              <tr
                key={user.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="px-6 py-4 font-medium">
                  {user.fullName}
                </td>

                <td className="px-6 py-4">
                  {user.email}
                </td>

                <td className="px-6 py-4">
                  <span className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    user.role === "ADMIN"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-blue-100 text-blue-700"
                  }`}>
                    {user.role}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    user.status === "ACTIVE"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    {user.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>

                <td className="px-6 py-4 text-center">

                  <button
                    onClick={() => handleDelete(user.id)}
                    className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}