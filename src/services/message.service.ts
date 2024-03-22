import "server-only";

import { Message } from "@/models/message";
import { getAccessToken } from "@auth0/nextjs-auth0";

interface GetMessageParams {
  type: "protected" | "admin";
}

export const getMessage = async ({
  type,
}: GetMessageParams): Promise<Message> => {
  const { accessToken } = await getAccessToken();

  if (!accessToken) {
    throw new Error(`Requires authorization`);
  }

  const res = await fetch(
    `${process.env.API_SERVER_URL}/api/messages/${type}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!res.ok) {
    const json = await res.json();

    return {
      text: json.message || res.statusText || "Unable to fetch message.",
    };
  }

  return res.json();
};

export const getPublicMessage = async () => {
  return {
    text: "This is a public message.",
  };
};

export const getProtectedMessage = async () => {
  return getMessage({ type: "protected" });
};

export const getAdminMessage = async () => {
  return getMessage({ type: "admin" });
};
