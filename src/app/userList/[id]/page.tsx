// TODO: The routing to this page works
// Just need to make the getDetail API call with the use of param

"use client";

import { useEffect, useState } from "react";

interface UserData {
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

  console.log(userData, "popopopopopo");

  if (userData === null) {
    return <div>Loading...</div>; // Render a loading state while data is being fetched
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
          <h1>User Name: {userData.name}</h1>
          <h1>User Email: {userData.email}</h1>
          <h1>User Phone: {userData.phoneNumber}</h1>

      </main>
    </>
  );
}
