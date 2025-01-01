"use client";
import { useEffect, useState } from "react";
import { getUser } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import ProtectedRoute from "@/lib/protect";

const Profil = () => {
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
    <ProtectedRoute>
      <div>Bu içerik korumalıdır. {user.email}</div>
    </ProtectedRoute>
  );
};

export default Profil;
