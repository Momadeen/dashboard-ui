import Head from "next/head";
import { Box, Container } from "@mui/material";
import { CustomerListResults } from "../components/customer/customerListResults";
import { CustomerListToolbar } from "../components/customer/customerListToolbar";
import { DashboardLayout } from "../components/dashboard/dashboardLayout";
import { customers } from "../data/customers";

const Customers = () => (
  <>
    <Head>
      <title>Customers | Hassanien</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          <CustomerListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);
Customers.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Customers;
