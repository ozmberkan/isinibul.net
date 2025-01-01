import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "@supabase/auth-helpers-react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (!session) {
      router.push("/giris");
    }
  }, [session]);

  if (!session) return null;

  return <>{children}</>;
}
