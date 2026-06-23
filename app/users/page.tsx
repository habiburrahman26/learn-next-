type GeoLocation = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation;
};
type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Response failed");
  }

  const result = await response.json();
  return result;
}

async function page() {
  const users = await getUsers();
  return (
    <div className="grid grid-cols-4 gap-4 pt-6">
      {users.map((user: User) => (
        <div key={user.id} className="border p-4 rounded-md shadow-md">
          <p className="text-lg font-semibold">{user.name}</p>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phone}</p>
          <p className="text-gray-600">{user.website}</p>
        </div>
      ))}
    </div>
  );
}

export default page;
