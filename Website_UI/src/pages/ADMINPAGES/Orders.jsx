import format from "date-fns/format";
import { HiDotsVertical } from "react-icons/hi";
import Badge from "../components/Badge";
import Card from "../components/Card";
import CardBody from "../components/CardBody";
import IconButton from "../components/IconButton";
import Page from "../components/Page";
import PageBody from "../components/PageBody";
import PageHeader from "../components/PageHeader";
import Table from "../components/Table";
import TableBody from "../components/TableBody";
import TableCell from "../components/TableCell";
import TableHead from "../components/TableHead";
import TableRow from "../components/TableRow";
import Typography from "../components/Typography";
import { useOrders } from "../hooks/useOrders";
import { Order } from "../types/order";



function OrderTable({ orders }) {
  if (!orders || !orders.length) {
    return null;
  }

  return (
    <Card className="md:col-span-12">
      <CardBody>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell head={true}>Date</TableCell>
              <TableCell head={true}>ID</TableCell>
              <TableCell head={true}>Status</TableCell>
              <TableCell head={true}>Amount</TableCell>
              <TableCell head={true}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  {format(new Date(order.createdAt), "yyyy-MM-dd")}
                </TableCell>
                <TableCell>{order.id}</TableCell>
                <TableCell>
                  <Badge>{order.status}</Badge>
                </TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>
                  <IconButton>
                    <HiDotsVertical />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
}

export default function Orders() {
  const { data } = useOrders();

  return (
    <Page>
      <PageHeader>
        <Typography variant="h1">Orders</Typography>
      </PageHeader>
      <PageBody>
        <OrderTable orders={data} />
      </PageBody>
    </Page>
  );
}
