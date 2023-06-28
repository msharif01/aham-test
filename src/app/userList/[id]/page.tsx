"use client";

import UserForm from "@/app/components/userForm/UserForm";
import { useEffect, useState } from "react";

export interface UserData {
  name: string;
  email: string;
  phoneNumber: string;
}

async function getUser(id: string): Promise<UserData> {
  const res = await fetch(`http://localhost:3000/api/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Page({ params }: { params: { id: string } }) {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUser(params.id);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  if (userData === null) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex-center">
          <div>Loading...</div>;
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex-center">
        <UserForm data={userData} />
      </div>
    </main>
  );
}
