import React from "react";
import { useParams } from "react-router-dom";

function ProfilePage() {
  // cach lay ra gia tri tren trinh duyet => useParam
  const { name1 } = useParams();
  return <div>ProfilePage - {name1}</div>;
}

export default ProfilePage;
