import "server-only";
import { Claims, getSession } from "@auth0/nextjs-auth0";

export const getUserProfileData = async (): Promise<Claims> => {
  const session = await getSession();

  if (!session) {
    throw new Error(`Requires authentication`);
  }

  const { user } = session;

  return user;
};
