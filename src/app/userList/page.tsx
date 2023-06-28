"use client";

import React, { createContext, useEffect, useState } from "react";
import UserListTable from "../components/userListTable/UserListTable";

async function getAllUsers() {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

type FlagContextType = {
  isUserDeleted: boolean;
  setIsUserDeleted: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FlagContext = createContext<FlagContextType | null>(null);

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [isUserDeleted, setIsUserDeleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllUsers();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [isUserDeleted]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex-center">
        <FlagContext.Provider value={{isUserDeleted, setIsUserDeleted}}>
        <UserListTable data={userData} />
        </FlagContext.Provider>
        
      </div>
    </main>
  );
};

export default UserList;
