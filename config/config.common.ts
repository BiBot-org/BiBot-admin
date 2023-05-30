export declare namespace ICommonConfig {
  export type Mode = "local" | "dev";

  export interface Params {
    authServiceUrl: string;
    authServiceSecret: string;
    userServiceUrl: string;
    cardServiceUrl: string;
    expenseServiceUrl: string;
    mode: Mode;
  }
}

export default function getConfigs(params: ICommonConfig.Params) {
  const {
    authServiceUrl,
    authServiceSecret,
    userServiceUrl,
    cardServiceUrl,
    expenseServiceUrl,
    mode,
  } = params;

  return {
    authServiceUrl,
    authServiceSecret,
    userServiceUrl,
    cardServiceUrl,
    expenseServiceUrl,
    mode,

    api: {},
  };
}
