import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const isArt = product.category === "art";

  const categoryLabel = isArt
    ? "محصول هنری"
    : "محصول مهندسی";

  return (
    <Card
      component={Link}
      to={`/products/${product.id}`}
      elevation={0}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",

        textDecoration: "none",
        color: "inherit",

        border: "none",
        borderRadius: 0,

        backgroundColor: "transparent",

        overflow: "visible",

        transition: "transform 1000ms ease",

        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      {/* Image */}
      <Box
        sx={{
          position: "relative",

          overflow: "hidden",

          borderRadius: 3,

          backgroundColor: "#f1f1f1",

          aspectRatio: "1 / 1",
        }}
      >
        <CardMedia
          component="img"
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",

            objectFit: "cover",

            transition:
              "transform 2000ms cubic-bezier(0.2, 0.7, 0.2, 1)",

            ".MuiCard-root:hover &": {
              transform: "scale(1.04)",
            },
          }}
        />
      </Box>

      {/* Information */}
      <CardContent
        sx={{
          px: 0,
          pt: 2.5,
          pb: 0,
        }}
      >
        {/* Category / small label */}
        <Typography
          variant="overline"
          sx={{
            display: "block",

            color: isArt
              ? "secondary.main"
              : "text.secondary",

            fontWeight: 700,

            fontSize: "0.68rem",

            letterSpacing: "0.04em",

            mb: 0.5,
          }}
        >
          {categoryLabel}
        </Typography>

        {/* Name */}
        <Typography
          component="h2"
          sx={{
            fontSize: "1.15rem",

            fontWeight: 700,

            lineHeight: 1.5,

            mb: 0.75,
          }}
        >
          {product.name}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.8,

            display: "-webkit-box",

            WebkitBoxOrient: "vertical",

            WebkitLineClamp: 2,

            overflow: "hidden",

            maxWidth: 500,
          }}
        >
          {product.description}
        </Typography>

        {/* Link */}
        <Typography
          component="span"
          sx={{
            display: "inline-block",

            mt: 2,

            fontSize: "0.9rem",

            fontWeight: 700,

            color: "text.primary",

            borderBottom: "1px solid",

            borderColor: "text.primary",

            pb: 0.25,

            transition:
              "color 180ms ease, border-color 180ms ease",

            ".MuiCard-root:hover &": {
              color: "secondary.main",

              borderColor:
                "secondary.main",
            },
          }}
        >
          مشاهده محصول
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;