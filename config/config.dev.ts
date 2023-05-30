import getConfigs from "./config.common";

const authServiceUrl = "";
const userServiceUrl = "배포 하게되면 Gateway URL";
const cardServiceUrl = "";
const expenseServiceUrl = "";
const mode = "dev";

const configDev = getConfigs({
  authServiceUrl,
  userServiceUrl,
  cardServiceUrl,
  expenseServiceUrl,
  mode,
});

export default configDev;
