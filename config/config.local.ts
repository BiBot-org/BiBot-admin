import getConfigs from "./config.common";

const authServiceUrl = "http://10.10.10.73:8080";
const authServiceSecret = "UzA54JarMBtp7myDE9d6HoyVTlaDNImF";
const userServiceUrl = "http://10.10.10.73:8081";
const cardServiceUrl = "http://10.10.10.73:8084";
const expenseServiceUrl = "http://10.10.10.73:8083";
const mode = "local";

const configLocal = getConfigs({
  authServiceUrl,
  authServiceSecret,
  userServiceUrl,
  cardServiceUrl,
  expenseServiceUrl,
  mode,
});

export default configLocal;
