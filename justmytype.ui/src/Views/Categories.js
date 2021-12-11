import React from 'react'
import { useParams } from 'react-router';

export default function Categories({ user }) {
  const { id } = useParams();
  console.warn(user, id);
  return (
    <div>
      <h1>Categories</h1>
    </div>
  )
}
