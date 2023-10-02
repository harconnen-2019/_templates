import { DEBUG_PREFIX } from "../lib/config";
import { fetchWrapper } from "../lib/fetchWrapper";
import { Logger } from "../lib/logger";

const api = {
  url: `${DEBUG_PREFIX}/api/red/users/login/`,
};

interface I<FTName % pascalcase>Service {
  success: number;
  message?: string;
  session: {
    user: { id: number; username: string };
    place: { id: number; name: string };
  };
}

function get(id: number): Promise<I<FTName % pascalcase>Service> {
  Logger.log('Logger: Запрос "GET" по адресу ', `${api.url}?id=${id}`);
  return fetchWrapper.get(api.url);
}

export const <FTName % camelcase>Service = {
  api,
  get,
};
