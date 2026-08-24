import { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Box,
  Button,
  CircularProgress,
  Alert,
  Chip,
  Stack,
  Divider,
} from "@mui/material";

import {
  ArrowForward,
  ShoppingCartOutlined,
} from "@mui/icons-material";

import {
  Link,
  useParams,
} from "react-router-dom";

import ProductGallery from "../components/Product/ProductGallery";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(false);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }

        return response.json();
      })
      .then((products) => {
        const foundProduct =
          products.find(
            (product) =>
              String(product.id) === id
          );

        setProduct(foundProduct);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 10,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error || !product) {
    return (
      <Container sx={{ py: 6 }}>
        <Alert severity="error">
          محصول مورد نظر پیدا نشد.
        </Alert>

        <Button
          component={Link}
          to="/products"
          sx={{ mt: 2 }}
        >
          بازگشت به محصولات
        </Button>
      </Container>
    );
  }

  const categoryLabel =
    product.category === "art"
      ? "محصول هنری"
      : "محصول مهندسی";

  return (
    <Container
      maxWidth="lg"
      sx={{ py: 6 }}
    >
      {/* Back */}
      <Button
        component={Link}
        to="/products"
        startIcon={<ArrowForward />}
        sx={{ mb: 4 }}
      >
        بازگشت به محصولات
      </Button>

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "1.1fr 1fr",
          },

          gap: {
            xs: 4,
            md: 7,
          },

          alignItems: "start",
        }}
      >
        {/* Product Gallery */}
        <ProductGallery
          product={product}
        />

        {/* Product Information */}
        <Box>
          <Chip
            label={categoryLabel}
            color={
              product.category === "art"
                ? "secondary"
                : "primary"
            }
            sx={{ mb: 2 }}
          />

          <Typography
            variant="h3"
            component="h1"
            fontWeight={800}
            gutterBottom
          >
            {product.name}
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              lineHeight: 2,
              mb: 4,
            }}
          >
            {product.description}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              lineHeight: 2,
              mb: 4,
            }}
          >
            {product.fulldesc}
          </Typography>

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
          >
            <Button
              component={Link}
              to={`/order?product=${product.id}`}
              variant="contained"
              color="primary"
              size="large"
              startIcon={
                <ShoppingCartOutlined />
              }
            >
              درخواست سفارش
            </Button>

            <Button
              component={Link}
              to="/products"
              variant="outlined"
              size="large"
            >
              مشاهده سایر محصولات
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default ProductDetails;