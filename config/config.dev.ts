import getConfigs from "./config.common";

const baseUrl = "배포 하게되면 Gateway URL";
const mode = "dev";

const configDev = getConfigs({
  baseUrl,
  mode,
});

export default configDev;
