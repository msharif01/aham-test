import React from "react";
import UserListTable from "../components/userListTable/UserListTable";

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/users", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

const userList = async () => {
  // const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex-center">
        {/* <UserListTable data={data}/> */}
      </div>
    </main>
  );
};

export default userList;
