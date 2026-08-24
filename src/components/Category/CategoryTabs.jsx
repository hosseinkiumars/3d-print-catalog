import {
  Box,
  Tab,
  Tabs,
} from "@mui/material";

function CategoryTabs({
  category,
  onChange,
}) {
  return (
    <Box
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Tabs
        value={category}
        onChange={(event, newValue) =>
          onChange(newValue)
        }
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          minHeight: 48,

          "& .MuiTab-root": {
            minHeight: 48,
            px: 2,
            fontWeight: 600,
            color: "text.secondary",
          },

          "& .Mui-selected": {
            color:
              "text.primary !important",
          },

          "& .MuiTabs-indicator": {
            height: 2,
            backgroundColor:
              "secondary.main",
          },
        }}
      >
        <Tab
          label="همه محصولات"
          value="all"
        />

        <Tab
          label="محصولات هنری"
          value="art"
        />

        <Tab
          label="محصولات مهندسی"
          value="engineering"
        />
      </Tabs>
    </Box>
  );
}

export default CategoryTabs;