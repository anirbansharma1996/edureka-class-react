import React from "react";
import useFetch from "../customhooks/Fetchhook.js";

const User = () => {
  const { data, loading, error } = useFetch("https://reqres.in/api/users");
  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (data) {
    return (
      <div>
        {data.data?.map((el) => (
          <h5>{el.email}</h5>
        ))}
      </div>
    );
  }
  return null
};

export default User;
