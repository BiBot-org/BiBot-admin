import getConfigs from "./config.common";

const baseUrl = "http://localhost:8081";
const mode = "local";

const configLocal = getConfigs({
  baseUrl,
  mode,
});

export default configLocal;
