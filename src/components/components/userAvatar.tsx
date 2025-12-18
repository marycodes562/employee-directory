"use client";

import React from "react";
import Avatar from "@mui/material/Avatar";

export default function UserAvatar({ alt, user }: any) {
  let source;

  if (!user.userPhotoUrl) {
    source = user.lastName;
  } else {
    source = user.firstName;
  }

  return (
    <>
      <Avatar alt={alt} src={source} />
    </>
  );
}
