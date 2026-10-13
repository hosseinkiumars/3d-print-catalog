import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Stack,
  Paper,
} from "@mui/material";

import {
  ArrowBack,
  Engineering,
  Palette,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

import InteractivePrinter from "../components/Hero/InteractivePrinter";

function Home() {
  return (
    <>
      {/* HERO */}
      <Box
        component="section"
        sx={{
          minHeight: {
            xs: "auto",
            md: "calc(100vh - 72px)",
          },
          display: "flex",
          alignItems: "center",
          py: {
            xs: 10,
            md: 14,
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{
              xs: 6,
              md: 10,
            }}
            alignItems="center"
          >
            {/* Text */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 3,
                  }}
                >
                </Box>

                <Typography
                  component="h1"
                  sx={{
                    fontSize: {
                      xs: "2.8rem",
                      sm: "3.5rem",
                      md: "5rem",
                    },
                    fontWeight: 800,
                    lineHeight: 1.15,
                    letterSpacing:
                      "-0.03em",
                    maxWidth: 750,
                  }}
                >
                  ایده‌ها را
                  <br />

                  <Box
                    component="span"
                    sx={{
                      color:
                        "secondary.main",
                    }}
                  >
                    به واقعیت
                  </Box>{" "}
                  تبدیل می‌کنیم.
                </Typography>

                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    mt: 4,
                    maxWidth: 620,
                    lineHeight: 2,
                    fontWeight: 400,
                  }}
                >
                  طراحی و ساخت محصولات چاپ سه‌بعدی با تمرکز بر فرم، کاربرد و کیفیت.
                </Typography>

                <Stack
                  direction={{
                    xs: "column",
                    sm: "row",
                  }}
                  spacing={2}
                  sx={{ mt: 5 }}
                >
                  <Button
                    component={Link}
                    to="/products"
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<ArrowBack />}
                  >
                    مشاهده محصولات
                  </Button>

                  <Button
                    component={Link}
                    to="/order"
                    variant="outlined"
                    size="large"
                  >
                    ثبت سفارش
                  </Button>
                </Stack>
              </Box>
            </Grid>

            {/* Interactive Printer */}
            <Grid
            size={{ xs: 12, md: 5 }}
            >
            <InteractivePrinter />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CATEGORIES */}
      <Box
        component="section"
        sx={{
          py: {
            xs: 9,
            md: 12,
          },
          backgroundColor:
            "background.paper",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: 6 }}>
            {/* <Typography
              variant="overline"
              color="secondary"
              fontWeight={700}
            >
              دسته‌بندی
            </Typography> */}

            <Typography
              variant="h3"
              component="h2"
              sx={{
                mt: 1,
                fontWeight: 800,
              }}
            >
              برای هر ایده،
              <br />
              یک امکان ساخت.
            </Typography>
          </Box>

          <Grid
            container
            spacing={3}
          >
            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <Paper
                component={Link}
                to="/products?category=art"
                elevation={0}
                sx={{
                  display: "block",
                  p: {
                    xs: 4,
                    md: 6,
                  },
                  minHeight: 300,
                  textDecoration:
                    "none",
                  color: "inherit",
                  border:
                    "1px solid",
                  borderColor:
                    "divider",
                  position:
                    "relative",
                  overflow: "hidden",
                  transition:
                    "all 0.25s ease",

                  "&:hover": {
                    borderColor:
                      "secondary.main",
                    transform:
                      "translateY(-4px)",
                  },
                }}
              >
                <Palette
                  sx={{
                    fontSize: 42,
                    color:
                      "secondary.main",
                    mb: 5,
                  }}
                />

                <Typography
                  variant="h4"
                  fontWeight={800}
                  gutterBottom
                >
                  محصولات هنری
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    maxWidth: 400,
                    lineHeight: 1.9,
                  }}
                >
                  اشیای دکوراتیو،
                  مجسمه‌ها و محصولات
                  خلاقانه برای فضاهای
                  متفاوت.
                </Typography>

                {/* <Typography
                  sx={{
                    position:
                      "absolute",
                    bottom: 30,
                    left: 30,
                    fontWeight: 700,
                    color:
                      "secondary.main",
                  }}
                >
                  مشاهده محصولات ←
                </Typography> */}
              </Paper>
            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <Paper
                component={Link}
                to="/products?category=engineering"
                elevation={0}
                sx={{
                  display: "block",
                  p: {
                    xs: 4,
                    md: 6,
                  },
                  minHeight: 300,
                  textDecoration:
                    "none",
                  color: "inherit",
                  border:
                    "1px solid",
                  borderColor:
                    "divider",
                  position:
                    "relative",
                  overflow: "hidden",
                  transition:
                    "all 0.25s ease",

                  "&:hover": {
                    borderColor:
                      "primary.main",
                    transform:
                      "translateY(-4px)",
                  },
                }}
              >
                <Engineering
                  sx={{
                    fontSize: 42,
                    color:
                      "primary.main",
                    mb: 5,
                  }}
                />

                <Typography
                  variant="h4"
                  fontWeight={800}
                  gutterBottom
                >
                  محصولات مهندسی
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    maxWidth: 400,
                    lineHeight: 1.9,
                  }}
                >
                  قطعات کاربردی،
                  ابزارها و راهکارهای
                  چاپ سه‌بعدی برای
                  پروژه‌های فنی.
                </Typography>

                {/* <Typography
                  sx={{
                    position:
                      "absolute",
                    bottom: 30
                    left: 30,
                    fontWeight: 700,
                    color:
                      "primary.main",
                  }}
                >
                  مشاهده محصولات ←
                </Typography> */}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        component="section"
        sx={{
          py: {
            xs: 9,
            md: 12,
          },
          backgroundColor:
            "#171717",
          color: "white",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            fontWeight={800}
            gutterBottom
          >
            چیزی که می‌خواهید
            <br />
            هنوز ساخته نشده؟
          </Typography>

          <Typography
            sx={{
              color: "#a3a3a3",
              lineHeight: 2,
              maxWidth: 550,
              mx: "auto",
              mb: 4,
            }}
          >
            برای سفارش محصول یا بررسی امکان
            ساخت یک قطعه اختصاصی، با ما
            در ارتباط باشید.
          </Typography>

          <Button
            component={Link}
            to="/order"
            variant="contained"
            color="secondary"
            size="large"
          >
            شروع یک پروژه
          </Button>
        </Container>
      </Box>
    </>
  );
}

export default Home;