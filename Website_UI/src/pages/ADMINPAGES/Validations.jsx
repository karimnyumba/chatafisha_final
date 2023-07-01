import React from "react";
import Card from "components/adminComponents/Card";
import Typography from "components/adminComponents/Typography";
import CardHeader from "components/adminComponents/CardHeader";
import CardBody from "components/adminComponents/CardBody";
import Menu from "components/adminComponents/Menu";
import MenuItem from "components/adminComponents/MenuItem";
import ProgressBar from "components/adminComponents/ProgressBar";
import Badge from "components/adminComponents/Badge";
import { Img } from "components";
import Button from "components/adminComponents/Button";
import { useNavigate } from "react-router-dom";

const authorsTableData = [
  {
    id: 12354,
    name: "Baraka Ramadhani",
    loc: " Mbezi, Dar es salaam",
    avatar: "images/Screen Shot 2022-12-14 at 11.40 1.png",
    validations: ["Manager", "Organization"],
    online: true,
    progress: 60,
    date: "23/04/18",
  },
  {
    id: 18845,
    name: "Janneth Hulingo",
    loc: " Mbezi, Dar es salaam",
    avatar: "images/Screen Shot 2022-12-14 at 11.png",
    validations: ["Programator", "Developer"],
    online: false,
    progress: 30,
    date: "11/01/19",
  },
];

const Validations = () => {
    const navigate = useNavigate();

  return (
    <div className=" flex mr-4 ">
      <Card>
        <CardHeader
          variant="gradient"
          color="teal-900"
          title="Validators"
          className="mb-2 mt-4 p-6 bg-blue-800 "
        >
            <div className="flex justify-between items-center"> 
        <Typography as="div" variant="h3">
        Validators
      </Typography>
      <Button onClick={() => {navigate("/AdminHome/Validations")}}>All Validations</Button>
      </div>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["validator", "function", "status", "progress", ""].map(
                  (el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-1 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {authorsTableData?.map(
                (
                  { id, name, avatar, validations, online, progress },
                  key
                ) => {
                  const className = `py-1 px-4 ${
                    key === authorsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div class="flex relative  justify-center items-center m-1 mr-2 text-xl rounded-full text-white">
                            <Img
                              src={avatar}
                              className=" w-20 h-20 rounded-full"
                            />
                          </div>
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              ID:{id}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {validations[0]}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {validations[1]}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Badge
                          variant="gradient"
                          color={online ? "success" : "primary"}
                          className="py-0.5 px-2 text-[11px] font-medium"
                        >
                         {online ? "online" : "offline"}
                        </Badge>
                      </td>
                      <td className={className}>
                        <Typography
                          variant="small"
                          className="mb-1 block text-xs font-medium text-blue-gray-600"
                        >
                          {progress}%
                        </Typography>
                        <ProgressBar
                          value={progress}
                         
                        />
                      </td>
                      <td className={className}>
                        <Menu
                          placement="left-start"
                          trigger="..."
                        >
                            <MenuItem>validations</MenuItem>
                            <MenuItem>View</MenuItem>
                        </Menu>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Validations;
