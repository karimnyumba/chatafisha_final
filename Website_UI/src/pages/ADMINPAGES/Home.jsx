import { HiUser } from "react-icons/hi";
import React from "react";
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
import useFetch from "hooks";
import { useEffect } from "react";
import { useGlobalContext } from "context";
import {RolesPerPeople} from "../../components/OptimizationGraphs";

const created_overviews = [
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
  console.log('dfajfpoiafeafda')
  const { data, isLoading, error, obtainData } = useFetch();
  const { user_details } = useGlobalContext()
  const[optimizationData, setOptimizationData] = React.useState(null);
  const [overviews, setOverviews] = React.useState(created_overviews)
  //Function to sort optimization data
  const sortData = (data) => { 
    const sortedData = {total_users:0, user_per_role_chart:[[],[]]}
    data.forEach((item) => {
      sortedData.total_users+=item.amount;
      sortedData.user_per_role_chart[0].push(item.role);
      sortedData.user_per_role_chart[1].push(item.amount);
    })
    return sortedData 
   }
  useEffect(() => {
    //delete
  if(user_details?.token){
    
    console.log(user_details, 'dafdafuodfafa')
    let url, method, options, body
    obtainData(
      (url = `user/optimization`),
      (method = 'get'),
      (body={}),
      (options = {
        headers: {
          token: user_details.token,
        },
      })
    )
  }
  }, [user_details])
  useEffect(() => {
    if (data){
     setOptimizationData(sortData(data.optimization_data))
    }
    }, [data])
 
   


  return (
    <Page>
      <PageHeader>
        <Typography variant='h1'>Home</Typography>
      </PageHeader>
      <PageBody className='grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>
        {(optimizationData && overviews) &&
          overviews.map((overview) => {
            if(overview.name === 'Users')
            return (
            <Card className='md:col-span-3' key={overview.name}>
              <CardBody>
                <Typography className='mb-2' bold>
                  {optimizationData.total_users}
                </Typography>
                <Typography muted smaller>
                  {overview.name}
                </Typography>
              </CardBody>
            </Card>
          );
          return (
            <Card className='md:col-span-3' key={overview.name}>
              <CardBody>
                <Typography className='mb-2' bold>
                  {overview.value}
                </Typography>
                <Typography muted smaller>
                  {overview.name}
                </Typography>
              </CardBody>
            </Card>
          )
          })}
        <Card className='md:col-span-4'>
          <CardHeader title='Top Users'></CardHeader>
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
        <Card className='md:col-span-4'>
          <CardHeader title='Targets'></CardHeader>
          <CardBody>
            {targets.map((target) => (
              <div key={target.name}>
                <div className='flex justify-between items-center mb-1'>
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
        <Card className='md:col-span-4'>
          <CardHeader title='Progress'></CardHeader>
          <CardBody>
          {
            optimizationData && <RolesPerPeople labels={optimizationData.user_per_role_chart[0]} series={optimizationData.user_per_role_chart[1]}/> 
          }
           
          </CardBody>
        </Card>
      </PageBody>
    </Page>
  )
}
