import instance from "./axiosClient";
const addUsers = (payload: {
  firstname: string;
  lastname: string;
  dob: Date;
  cccd: number;
  address: string;
  phonenumer: number;
  bankingnumber: number;
  username: string;
  password: string;
}) => {
  return instance.post("úser", payload);
};
const login = (username: string, password: string) => {
  return instance.post(
    "auth/login-v2",
    {},
    {
      params: {
        username,
        password,
      },
    }
  );
};
export { addUsers, login };
