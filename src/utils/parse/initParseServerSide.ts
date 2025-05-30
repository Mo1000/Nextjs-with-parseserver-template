"use server"
import Parse from "parse/node";
import { Config } from "../../../server/src/constantes/config";

export const initParseInServerSide = async () => {
  Parse.initialize(Config.APP_ID, Config.JAVASCRIPT_KEY);
  Parse.serverURL = Config.SERVER_URL;
  Parse.CoreManager.set("REQUEST_ATTEMPT_LIMIT", 1);
};
