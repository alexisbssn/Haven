import React from "react";
import { RefugeeModel } from "@/models/User";
//import dbConnect from "@/lib/dbConnect";

export default async function page() {
  //await dbConnect();

  // const Refugees = () => {
  //   const [refugees, setRefugees] = useState([]);

  // RefugeeModel.create({email:"test@email.com", firstName: "John", lastName: "Doe"})
  // setRefugees(RefugeeModel.find({}))

  return (
    <div>
      <div>Dashboard</div>
      <div className="item-container">
        {/* {refugees.map((r) => (
          <div>
            {r.firstName}
          </div>
        ))} */}
      </div>
    </div>
  );
}
