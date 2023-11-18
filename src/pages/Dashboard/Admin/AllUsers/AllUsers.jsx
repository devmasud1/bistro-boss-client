import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

import AllUsersTable from "./AllUsersTable";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecureUrl = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecureUrl.get("/users");
      return res.data;
    },
  });

  return (
    <div>
      <div>
        <SectionTitle subHeading="How many?" mainHeading="MANAGE ALL USERS" />
        <h1 className="lg:text-3xl font-medium mb-4">Total users: {users.length}</h1>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {
                users?.map((user, idx) => <AllUsersTable 
                    key={user._id}
                    user={user}
                    idx={idx}
                    refetch={refetch}
                    ></AllUsersTable>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AllUsers;
