// Libraries
import React from "react";
import { useQuery } from "@apollo/react-hooks";
// Components
import LoadingScreen from '../LoadingScreen';
//Component
const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id }
  });
  if (loading) return <LoadingScreen />;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;