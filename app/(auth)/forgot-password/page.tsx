"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const submit = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    );

    const data = await res.json();

    alert(data.message);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="border p-6 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">
          Forgot Password
        </h1>

        <input
          className="w-full border p-3 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <button
          onClick={submit}
          className="w-full mt-4 bg-black text-white p-3 rounded"
        >
          Send OTP
        </button>
      </div>
    </div>
  );
}