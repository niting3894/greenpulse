import { postRawData } from "./index";

export const ContactUsApi = async (payload) => {
  return postRawData("audiologist/login", payload).then((data) => {
    return data;
  });
};
