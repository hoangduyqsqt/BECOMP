import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Duy",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      role: "admin",
      department: "Finance",
      avatar:
       "v1679611526/r4i3tsryjcwht4qvtbvn.jpg",
    },
    {
      name: "Duy1",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      role: "staff",
      department: "Finance",
      avatar:
        "v1679611526/r4i3tsryjcwht4qvtbvn.jpg",
    },
  ],
};
export default data;
