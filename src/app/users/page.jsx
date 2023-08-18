import Users from "@/components/Users";

const fetchUsers = async () => {
  const users = await fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((res) => res.data);
  return users;
};

const Home = async () => {
  const users = await fetchUsers();
  return <Users users={users}></Users>;
};

export default Home;
