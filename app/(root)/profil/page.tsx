"use client";
import { useEffect, useState } from "react";
import { getUser } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await getUser();
      if (data) {
        setUser(data.user);
      } else if (error) {
        console.error("Error fetching user:", error.message);
      }
    };

    fetchUser();
  }, []);

  console.log(user);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
