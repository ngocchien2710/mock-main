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
  return instance.post("User", payload);
};
export { addUsers };
