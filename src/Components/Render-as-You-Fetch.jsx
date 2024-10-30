import { fetchData } from "@/hooks/useFetchData";
import { Suspense } from "react";

const apiUrl = import.meta.env.VITE_API_URL;
const apiData = fetchData(`${apiUrl}/users`);
const RenderAsYouFetch = () => {
  const data = apiData.read();
  return (
    <>
      <h1>Fetch Like a PRO</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="card">
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </Suspense>
    </>
  );
};

export default RenderAsYouFetch;
