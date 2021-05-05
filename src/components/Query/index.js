// Libraries
import React from "react";
import { useQuery } from "@apollo/react-hooks";
// Components
import LoadingScreen from '../LoadingScreen';
import DBError from '../DBError';
//Component
const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id }
  });
  if (loading) return <LoadingScreen />;
  if (error) return <DBError />;
  return children({ data });
};

export default Query;