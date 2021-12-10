import React, { useEffect, useState } from 'react'
import { getUserByFBKey } from '../data/userData';

export default function UserPage({user}) {
  const [myInfo, setMyInfo] = useState({});

useEffect(() => {
  getUserByFBKey(user.user?.uid).then(setMyInfo);
}, [])

console.warn(myInfo);

  return (
    <div>
      <h1>User Page</h1>
    </div>
  )
}
