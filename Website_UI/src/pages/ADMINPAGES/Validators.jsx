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

const ValidationsTableData = [
  {
    id: 12354,
    name: "Baraka Ramadhani",
    validation: " Mbezi, Dar es salaam",
    avatar: "images/Screen Shot 2022-12-14 at 11.40 1.png",
    validations: ["Manager", "Organization"],
    pending: true,
    progress: 60,
    date: "23/04/18",
  },
  {
    id: 18845,
    name: "Janneth Hulingo",
    validation: " Mbezi, Dar es salaam",
    avatar: "images/Screen Shot 2022-12-14 at 11.png",
    validations: ["Programator", "Developer"],
    pending: false,
    progress: 30,
    date: "11/01/19",
  },
];
const Validators = () => {
  return (
    <div className="flex justify-center items-center mr-5">
      <Card>
        <CardHeader
          color="teal-900"
          title="Validators"
          className="mb-2 mt-4 p-6 bg-blue-800 "
        >
          <Typography variant="h6" color="white">
            Validations
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["validation", "name", "status", "date", ""].map((el) => (
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
                ))}
              </tr>
            </thead>
            <tbody>
              {ValidationsTableData.map(
                ({ validation, name, progress, pending, date }, key) => {
                  const className = `py-2 px-5 ${
                    key === ValidationsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {validation}
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Badge
                          variant="gradient"
                          color={pending ? "primary" : "success"}
                          className="py-0.5 px-2 text-[11px] font-medium"
                        >
                          {pending ? "Pending" : "Validated"}
                        </Badge>
                      </td>
                      <td className={className}>
                        <div className="w-10/12">
                          <Typography
                            variant="small"
                            className="mb-1 block text-xs font-medium text-blue-gray-600"
                          >
                            {date}
                          </Typography>
                          {/* <ProgressBar
                            value={progress}
                            variant="gradient"
                            color={progress === 100 ? "green" : "blue"}
                            className="h-1"
                          /> */}
                        </div>
                      </td>
                      <td className={className}>
                        {pending ? <Button>Validate</Button> : " "}
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

export default Validators;
