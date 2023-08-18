"use client";

import Link from "next/link";

const Users = ({ users }) => {
  return (
    <ul>
      {users?.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <li className="bg-slate-400 mb-2  p-4 rounded-md flex justify-between ">
            <img
              src={user.avatar}
              alt={user.first_name}
              className="rounded-full w-20"
            ></img>
            <div>
              <h1 className="font-bold">
                {user.first_name} {user.last_name}
              </h1>
              <h3>{user.email}</h3>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};
export default Users;
