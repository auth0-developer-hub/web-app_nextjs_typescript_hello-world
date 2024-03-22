import "server-only";

import { Message } from "@/models/message";

interface GetMessageParams {
  type: "public" | "protected" | "admin";
}

export const getMessage = async ({
  type,
}: GetMessageParams): Promise<Message> => {
  switch (type) {
    case "public": {
      return {
        text: "This is a public message.",
      };
    }
    case "protected": {
      return { text: "This is a protected message." };
    }
    case "admin": {
      return {
        text: "This is an admin message.",
      };
    }
  }
};

export const getPublicMessage = async () => {
  return getMessage({ type: "public" });
};

export const getProtectedMessage = async () => {
  return getMessage({ type: "protected" });
};

export const getAdminMessage = async () => {
  return getMessage({ type: "admin" });
};
