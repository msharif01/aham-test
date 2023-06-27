import React from "react";
import styles from "./page.module.css";
import UserListTable from "../components/userListTable/UserListTable";

const userList = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex-center">
        <UserListTable />
      </div>
    </main>
  );
};

export default userList;
