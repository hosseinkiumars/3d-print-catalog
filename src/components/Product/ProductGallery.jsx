import { useState } from "react";

import {
  Box,
  IconButton,
} from "@mui/material";

import {
  ArrowForwardIos,
  ArrowBackIosNew,
} from "@mui/icons-material";

function ProductGallery({ product }) {
  const images = product.images || [];

  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const selectedImage =
    images[selectedIndex];

  const previousImage = () => {
    setSelectedIndex((current) =>
      current === 0
        ? images.length - 1
        : current - 1
    );
  };

  const nextImage = () => {
    setSelectedIndex((current) =>
      current === images.length - 1
        ? 0
        : current + 1
    );
  };

  // اگر محصول هیچ تصویری نداشت
  if (images.length === 0) {
    return (
      <Box
        sx={{
          aspectRatio: "1 / 1",

          borderRadius: 4,

          backgroundColor: "#f1f1f1",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          color: "text.secondary",
        }}
      >
        تصویری برای این محصول موجود نیست
      </Box>
    );
  }

  return (
    <Box>
      {/* Main Image */}
      <Box
        sx={{
          position: "relative",

          width: "100%",

          aspectRatio: "1 / 1",

          overflow: "hidden",

          borderRadius: 4,

          backgroundColor: "#f1f1f1",
        }}
      >
        <Box
          component="img"
          src={selectedImage}
          alt={product.name}
          loading="eager"
          sx={{
            width: "100%",
            height: "100%",

            objectFit: "cover",

            display: "block",
          }}
        />

        {/* Navigation */}
        {images.length > 1 && (
          <>
            {/* Previous - Right */}
            <IconButton
              onClick={previousImage}
              aria-label="تصویر قبلی"
              sx={{
                position: "absolute",

                top: "50%",
                right: 16,

                transform:
                  "translateY(-50%)",

                width: 42,
                height: 42,

                backgroundColor:
                  "rgba(255,255,255,0.9)",

                color: "text.primary",

                "&:hover": {
                  backgroundColor:
                    "#ffffff",
                },
              }}
            >
              <ArrowBackIosNew
                fontSize="small"
              />
            </IconButton>

            {/* Next - Left */}
            <IconButton
              onClick={nextImage}
              aria-label="تصویر بعدی"
              sx={{
                position: "absolute",

                top: "50%",
                left: 16,

                transform:
                  "translateY(-50%)",

                width: 42,
                height: 42,

                backgroundColor:
                  "rgba(255,255,255,0.9)",

                color: "text.primary",

                "&:hover": {
                  backgroundColor:
                    "#ffffff",
                },
              }}
            >
              <ArrowForwardIos
                fontSize="small"
              />
            </IconButton>
          </>
        )}
      </Box>

      {/* Thumbnails */}
      {images.length > 1 && (
        <Box
          sx={{
            display: "flex",

            gap: 1.5,

            mt: 2,

            overflowX: "auto",

            pb: 1,

            "&::-webkit-scrollbar": {
              height: 4,
            },

            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#d0d0d0",

              borderRadius: 10,
            },
          }}
        >
          {images.map(
            (image, index) => (
              <Box
                key={`${image}-${index}`}
                component="button"
                type="button"
                onClick={() =>
                  setSelectedIndex(index)
                }
                aria-label={`نمایش تصویر ${
                  index + 1
                }`}
                sx={{
                  flexShrink: 0,

                  width: {
                    xs: 72,
                    sm: 84,
                  },

                  height: {
                    xs: 72,
                    sm: 84,
                  },

                  padding: 0,

                  border: "2px solid",

                  borderColor:
                    selectedIndex === index
                      ? "primary.main"
                      : "transparent",

                  borderRadius: 2,

                  overflow: "hidden",

                  backgroundColor:
                    "#f1f1f1",

                  cursor: "pointer",

                  transition:
                    "border-color 180ms ease",

                  "&:hover": {
                    borderColor:
                      "primary.main",
                  },
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={`${product.name} - تصویر ${
                    index + 1
                  }`}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: "100%",

                    objectFit: "cover",

                    display: "block",
                  }}
                />
              </Box>
            )
          )}
        </Box>
      )}
    </Box>
  );
}

export default ProductGallery;