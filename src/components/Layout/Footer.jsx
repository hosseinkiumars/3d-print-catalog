import {
  Box,
  Container,
  Typography,
  Divider,
  Stack,
} from "@mui/material";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#111111",
        color: "white",
        pt: 7,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          justifyContent="space-between"
          spacing={4}
          sx={{ mb: 6 }}
        >
          <Box>
            <Typography
              fontWeight={800}
              sx={{
                letterSpacing: "0.08em",
                mb: 1,
              }}
            >
              گالری سه‌بعدی چاپ
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#a3a3a3",
                maxWidth: 350,
                lineHeight: 1.9,
              }}
            >
              طراحی و ساخت محصولات چاپ سه‌بعدی
              برای کاربردهای هنری، دکوراتیو و مهندسی.
            </Typography>
          </Box>

          <Stack spacing={1}>
            <Typography
              variant="subtitle2"
              fontWeight={700}
            >
              دسترسی سریع
            </Typography>

            <Typography
              component={Link}
              to="/products"
              sx={{
                color: "#a3a3a3",
                textDecoration: "none",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              محصولات
            </Typography>

            <Typography
              component={Link}
              to="/order"
              sx={{
                color: "#a3a3a3",
                textDecoration: "none",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              ارتباط با ما
            </Typography>
          </Stack>
        </Stack>

        <Divider
          sx={{
            borderColor: "#2a2a2a",
            mb: 3,
          }}
        />

        <Typography
          variant="caption"
          sx={{ color: "#737373" }}
        >
          © 2026 تمامی حقوق برای گالری سه‌بعدی چاپ محفوظ است.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;