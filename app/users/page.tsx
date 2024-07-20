import React from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UsersPage = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //   //  cache: "no-store" // we dont want to cache this request this is used where data gets updated frequently
  //   next: { revalidate: 10 }, // here nextjs will revalidate/refresh the page every 10 seconds
  // });

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // we dont want to cache this request this is used where data gets updated frequently
  });

  const users: User[] = await res.json();

  //thead>tr>th*2
  return (
    <>
      <h1>Users.</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
        {/* <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul> */}
      </table>
    </>
  );
};

export default UsersPage;
