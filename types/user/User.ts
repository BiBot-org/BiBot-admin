export interface InitSetupReq {
  rootEmail: string;
  rootPassword: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm: boolean;
  departmentList: iDepartmentInit[];
  categoryList: iCategoryInit[];
  rootTeamName: string;
}

export interface iDepartmentInit {
  name: string;
  teams: string[];
}

export interface CreateUserReq {
  firstName: string;
  lastName: string;
  profileUrl: string;
  email: string;
  password: string;
  duty: string;
  teamId: number;
}

export interface iCategoryInit {
  name: string;
  limitation: number;
  automatedCost: number;
  resetCycle: string;
}

export interface UserAuthInfo {
  userId: string;
  isLogin: boolean;
}

export interface UserAuthReq {
  userEmail: string;
  password: string;
}

export interface VerifyEmailReq {
  email: string;
  verifyCode: string;
}

export interface UserAccountInfo {
  id: string;
  firstName: string;
  lastName: string;
  profileUrl: string;
  departmentName: string;
  teamName: string;
  rank: string;
  duty: string;
  email: string;
}

export interface NewUserAccountReq {
  firstName: string;
  lastName: string;
  profileUrl: string;
  departmentId: number;
  teamId: number;
  rankId: number;
  duty: string;
  email: string;
}

export interface DepartmentInfo {
  id: number;
  name: string;
}

export interface ResourceAccess {
  bibot: {
    roles: string[];
  };
}
