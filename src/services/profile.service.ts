import "server-only";

import { UserProfile } from "@/models/user-profile";

export const getUserProfileData = async (): Promise<UserProfile> => {
  return {
    nickname: "Customer",
    name: "One Customer",
    picture: "https://cdn.auth0.com/blog/hello-auth0/auth0-user.png",
    updated_at: "2021-05-04T21:33:09.415Z",
    email: "customer@example.com",
    email_verified: false,
    sub: "auth0|12345678901234567890",
  };
};
