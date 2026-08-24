import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import {
  EmailOutlined,
  PhoneOutlined,
} from "@mui/icons-material";

function Order() {
  const email = "order@chop3d.ir";
  const phone = "09305086005";

  return (
    <Box
      component="main"
      sx={{
        minHeight: "calc(100vh - 72px)",
        py: {
          xs: 8,
          md: 12,
        },
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          {/* Heading */}
          <Typography
            variant="overline"
            sx={{
              color: "secondary.main",
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            CONTACT
          </Typography>

          <Typography
            component="h1"
            variant="h2"
            sx={{
              mt: 1,
              fontWeight: 800,
              fontSize: {
                xs: "2.4rem",
                md: "3.5rem",
              },
            }}
          >
            ارتباط با ما
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 3,
              mx: "auto",
              maxWidth: 580,
              lineHeight: 2,
            }}
          >
            برای سفارش محصولات، دریافت اطلاعات بیشتر
            یا بررسی امکان ساخت یک محصول اختصاصی،
            از طریق ایمیل یا تلفن با ما در ارتباط باشید.
          </Typography>

          {/* Contact Information */}
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
            justifyContent="center"
            alignItems="stretch"
            sx={{
              mt: 6,
            }}
          >
            {/* Email */}
            <Box
              component="a"
              href={`mailto:${email}`}
              sx={{
                flex: 1,
                minWidth: {
                  sm: 260,
                },

                p: 3,

                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                textDecoration: "none",
                color: "inherit",

                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,

                transition:
                  "border-color 180ms ease, transform 180ms ease",

                "&:hover": {
                  borderColor:
                    "secondary.main",
                  transform:
                    "translateY(-3px)",
                },
              }}
            >
              <EmailOutlined
                sx={{
                  fontSize: 32,
                  color: "secondary.main",
                  mb: 1.5,
                }}
              />

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 0.5 }}
              >
                ایمیل
              </Typography>

              <Typography
                sx={{
                  fontWeight: 700,
                  direction: "ltr",
                }}
              >
                {email}
              </Typography>
            </Box>

            {/* Phone */}
            <Box
              component="a"
              href={`tel:${phone}`}
              sx={{
                flex: 1,
                minWidth: {
                  sm: 260,
                },

                p: 3,

                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                textDecoration: "none",
                color: "inherit",

                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,

                transition:
                  "border-color 180ms ease, transform 180ms ease",

                "&:hover": {
                  borderColor:
                    "primary.main",
                  transform:
                    "translateY(-3px)",
                },
              }}
            >
              <PhoneOutlined
                sx={{
                  fontSize: 32,
                  color: "primary.main",
                  mb: 1.5,
                }}
              />

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 0.5 }}
              >
                تلفن تماس
              </Typography>

              <Typography
                sx={{
                  fontWeight: 700,
                  direction: "ltr",
                }}
              >
                {phone}
              </Typography>
            </Box>
          </Stack>

          <Divider
            sx={{
              my: 7,
            }}
          />

          {/* Order CTA */}
          <Typography
            variant="h5"
            fontWeight={700}
            gutterBottom
          >
            قصد سفارش دارید؟
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mb: 3,
              lineHeight: 1.9,
            }}
          >
            نام محصول موردنظر و توضیحات خود را
            از طریق ایمیل برای ما ارسال کنید.
          </Typography>

          <Button
            component="a"
            href={`mailto:${email}?subject=درخواست سفارش`}
            variant="contained"
            color="primary"
            size="large"
            startIcon={<EmailOutlined />}
          >
            ارسال درخواست سفارش
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Order;