import UserForm from "./components/userForm/UserForm";

// TODO:
// -UserList component
// -- Redirect (DONE)
// -- Table, with columns of, name , email , phone number, account number 
// -- Fill with mock data (DONE)
// -- Drop down action (DONE)
// -- View - just view the details , 
// routing -> [id] page (IN PROGRESS) -> bare bone only details 
// -- Delete - remove the user from list

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex-center">
        <UserForm />
      </div>
    </main>
  );
}
