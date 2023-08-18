const getUserID = async (id) => {
  const UserByID = await fetch(`https://reqres.in/api/users/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
  return UserByID;
};

const UserId = async ({ params }) => {
  const UserByID = await getUserID(params.id);
  return (
    <div className="bg-slate-400   p-10 rounded-md">
      <img
        src={UserByID.avatar}
        alt={UserByID.first_name}
        className="m-auto my-4"
      ></img>
      <h1 className="font-bold">
        {UserByID.first_name} {UserByID.last_name}
      </h1>
      <h3>{UserByID.email}</h3>
    </div>
  );
};
export default UserId;
