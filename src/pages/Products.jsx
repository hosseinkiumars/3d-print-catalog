import { useEffect, useState } from "react";

import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import {
  useSearchParams,
} from "react-router-dom";

import ProductGrid from "../components/Product/ProductGrid";
import CategoryTabs from "../components/Category/CategoryTabs";

function Products() {
  const [products, setProducts] =
    useState([]);

  const [searchParams, setSearchParams] =
    useSearchParams();

  const initialCategory =
    searchParams.get("category") || "all";

  const [category, setCategory] =
    useState(initialCategory);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(false);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Failed to load products"
          );
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const urlCategory =
      searchParams.get("category") || "all";

    setCategory(urlCategory);
  }, [searchParams]);

  const handleCategoryChange = (
    newCategory
  ) => {
    if (newCategory === "all") {
      setSearchParams({});
    } else {
      setSearchParams({
        category: newCategory,
      });
    }
  };

  const filteredProducts =
    category === "all"
      ? products
      : products.filter(
          (product) =>
            product.category ===
            category
        );

  return (
    <Box
      component="main"
      sx={{
        minHeight:
          "calc(100vh - 72px)",
        py: {
          xs: 7,
          md: 10,
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Box
          sx={{
            mb: 6,
          }}
        >
          {/* <Typography
            variant="overline"
            sx={{
              color: "secondary.main",
              fontWeight: 700,
              letterSpacing:
                "0.08em",
            }}
          >
            کاتالوگ
          </Typography> */}

          <Typography
            variant="h2"
            component="h1"
            sx={{
              mt: 1,
              fontWeight: 800,
              fontSize: {
                xs: "2.4rem",
                md: "3.5rem",
              },
            }}
          >
            محصولات
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 2,
              maxWidth: 600,
              lineHeight: 1.9,
            }}
          >
            مجموعه‌ای از محصولات چاپ
            سه‌بعدی طراحی و تولید شده برای
            کاربردهای هنری و مهندسی.
          </Typography>
        </Box>

        {/* Categories */}
        <CategoryTabs
          category={category}
          onChange={
            handleCategoryChange
          }
        />

        {/* Loading */}
        {loading && (
          <Box
            sx={{
              minHeight: 400,
              display: "flex",
              alignItems: "center",
              justifyContent:
                "center",
            }}
          >
            <CircularProgress
              size={32}
              thickness={3}
            />
          </Box>
        )}

        {/* Error */}
        {error && (
          <Alert
            severity="error"
            sx={{ mt: 4 }}
          >
            دریافت اطلاعات محصولات با
            مشکل مواجه شد.
          </Alert>
        )}

        {/* Products */}
        {!loading &&
          !error && (
            <Box sx={{ mt: 4 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 3 }}
              >
               {/* تعداد محصولات دسته */}
                {/* <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {filteredProducts.length}{" "}
                  محصول
                </Typography> */}
              </Stack>

              {filteredProducts.length ===
              0 ? (
                <Alert severity="info">
                  محصولی در این
                  دسته‌بندی وجود ندارد.
                </Alert>
              ) : (
                <ProductGrid
                  products={
                    filteredProducts
                  }
                />
              )}
            </Box>
          )}
      </Container>
    </Box>
  );
}

export default Products;