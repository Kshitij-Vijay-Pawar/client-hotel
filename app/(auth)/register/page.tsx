"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      router.push("/login");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full border p-6 rounded-lg space-y-4"
      >
        <h1 className="text-2xl font-bold">
          Register
        </h1>

        <input
          placeholder="First Name"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              firstName: e.target.value,
            })
          }
        />

        <input
          placeholder="Last Name"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              lastName: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          placeholder="Phone"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <button
          className="w-full bg-black text-white p-3 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}