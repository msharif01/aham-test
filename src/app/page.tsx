import UserForm from "./components/userForm/UserForm";

// TODO:
// -UserList component
// -- Table, with columns of, name , email , phone number, account number
// -- Fill with mock data

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex-center">
        <UserForm />
      </div>
    </main>
  );
}
