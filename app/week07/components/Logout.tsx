"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItm("user");

    router.push("/week07/logout");
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-lg bg-red-600 px-4 py-2 text-white"
    >
      Logout
    </button>
  );
}
