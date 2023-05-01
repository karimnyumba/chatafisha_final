import { HiUser } from "react-icons/hi";
import Avatar from "../../components/adminComponents/Avatar";
import Badge, { BadgeColor } from "../../components/adminComponents/Badge";
import Card from "../../components/adminComponents/Card";
import CardBody from "../../components/adminComponents/CardBody";
import CardHeader from "../../components/adminComponents/CardHeader";
import List from "../../components/adminComponents/List";
import ListItem from "../../components/adminComponents/ListItem";
import Page from "../../components/adminComponents/Page";
import PageBody from "../../components/adminComponents/PageBody";
import PageHeader from "../../components/adminComponents/PageHeader";
import ProgressBar from "../../components/adminComponents/ProgressBar";
// import ProgressCircle from "../../components/adminComponents/ProgressCircle";
import Table from "../../components/adminComponents/Table";
import TableBody from "../../components/adminComponents/TableBody";
import TableCell from "../../components/adminComponents/TableCell";
import TableHead from "../../components/adminComponents/TableHead";
import TableRow from "../../components/adminComponents/TableRow";
import Typography from "../../components/adminComponents/Typography";

const overviews = [
  {
    name: "Users",
    value: "12 500"
  },
  {
    name: "No Of Blogs",
    value: "12 500"
  },
  {
    name: "Products",
    value: "12 500"
  },
  {
    name: "Visits",
    value: "12 500"
  }
];

const users = [
  {
    firstName: "John",
    lastName: "Smith",
    job: "Web developer"
  },
  {
    firstName: "Jane",
    lastName: "John",
    job: "Designer"
  }
];


const targets = [
  {
    name: "Visits",
    value: 90
  },
  {
    name: "Income",
    value: 75
  },
  {
    name: "Orders",
    value: 50
  }
];

export default function AdminHomePage() {
  return (
    <Page>
      <PageHeader>
        <Typography variant="h1">Home</Typography>
      </PageHeader>
      <PageBody className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {overviews.map((overview) => (
          <Card className="md:col-span-3" key={overview.name}>
            <CardBody>
              <Typography className="mb-2" bold>{overview.value}</Typography>
              <Typography muted smaller>
                {overview.name}
              </Typography>
            </CardBody>
          </Card>
        ))}
        <Card className="md:col-span-4">
          <CardHeader title="Top Users"></CardHeader>
          <CardBody>
            <List>
              {users.map((user, index) => (
                <ListItem
                  avatar={
                    <Avatar>
                      <HiUser />
                    </Avatar>
                  }
                  key={index}
                  subTitle={user.job}
                  title={`${user.firstName} ${user.lastName}`}
                />
              ))}
            </List>
          </CardBody>
        </Card>
        <Card className="md:col-span-4">
          <CardHeader title="Targets"></CardHeader>
          <CardBody>
            {targets.map((target) => (
              <div key={target.name}>
                <div className="flex justify-between items-center mb-1">
                  <Typography bold muted small>
                    {target.name}
                  </Typography>
                  <Typography bold small>{`${target.value}%`}</Typography>
                </div>
                <ProgressBar value={target.value} />
              </div>
            ))}
          </CardBody>
        </Card>
        <Card className="md:col-span-4">
          <CardHeader title="Progress"></CardHeader>
          <CardBody>
            {/* <ProgressCircle /> */}
          </CardBody>
        </Card>
      </PageBody>
    </Page>
  );
}
