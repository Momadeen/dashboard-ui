import Head from "next/head";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { products } from "../data/products";
import { ProductListToolbar } from "../components/product/productListToolbar";
import { ProductCard } from "../components/product/productCard";
import { DashboardLayout } from "../components/dashboard/dashboardLayout";

const Products = () => (
  <>
    <Head>
      <title>Products | Hassanien</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item key={product.id} lg={4} md={6} xs={12}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 3,
          }}
        >
          <Pagination color="primary" count={3} size="small" />
        </Box>
      </Container>
    </Box>
  </>
);

Products.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Products;
