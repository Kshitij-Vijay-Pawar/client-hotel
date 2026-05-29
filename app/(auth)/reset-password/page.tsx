"use client";

import { useState } from "react";

export default function ResetPasswordPage() {
  const [form, setForm] = useState({
    email: "",
    otp: "",
    password: "",
  });

  const submit = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    const data = await res.json();

    alert(data.message);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="border p-6 rounded-lg w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">
          Reset Password
        </h1>

        <input
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
          placeholder="OTP"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              otp: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="New Password"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <button
          onClick={submit}
          className="w-full bg-black text-white p-3 rounded"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}