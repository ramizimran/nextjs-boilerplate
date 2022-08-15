import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import chunk from "lodash/chunk";
import Head from "next/head";

// import Page from "components/templates/Page";
import { ListItem, MPSocial } from "components/ui";

const data = {
  dependencies: [
    {
      name: "🌊 NextJs",
      website: "https://nextjs.org/",
    },
    {
      name: "🎨 Material UI",
      website: "https://mui.com/",
    },
    { name: "🚀 Mongodb", website: "https://www.mongodb.com/" },
    { name: "📝 Formik", website: "https://formik.org/" },
    { name: "🔪 Yup", website: "#" },
    { name: "🧰 Lodash", website: "https://lodash.com/" },
    { name: "🎴 Cloudinary", website: "https://cloudinary.com/" },
    { name: "🎆 Swr", website: "https://swr.vercel.app/" },
  ],
  repository: "https://github.com/ramizimran/nextjs-boilerplate.git",
};

const Home = (props) => {
  const { dependencies, repository } = data;
  return (
    <BoxStyled>
      <Head>
        <title>NextJs Boilerplate</title>
        <meta name="description" content="NextJs Boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContainerStyled maxWidth="lg">
        <Typography
          variant="h1"
          component="h2"
          color="common.black"
          sx={{ mb: 4 }}
        >
          Start a new project <br />
          with{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            NextJs
          </Box>
        </Typography>

        <Typography
          variant="body1"
          component="p"
          color="common.black"
          sx={{ maxWidth: 600, mb: 2.5 }}
        >
          The starting point for your next project based on easy-to-customize
          MUI helps you build apps faster and better.
        </Typography>

        <ListStyled>
          {chunk(dependencies, dependencies.length / 2).map((column, index) => (
            <ColumnStyled key={index}>
              {column.map((dependency, index) => (
                <ListItem dependency={dependency} key={index} />
              ))}
            </ColumnStyled>
          ))}
        </ListStyled>

        <ButtonStyled
          variant="contained"
          startIcon={<GitHubIcon />}
          onClick={() => window.open(repository, "_blank", "noopener")}
        >
          Get Repository
        </ButtonStyled>
        <Typography
          variant="h6"
          component="p"
          color="common.black"
          sx={{ maxWidth: 600, mb: 2.5 }}
        >
          Follow me on
        </Typography>
        <MPSocial />
      </ContainerStyled>
    </BoxStyled>
  );
};

const BoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  maxHeight: "100vh",
  padding: theme.spacing(0, 2),
}));

const ContainerStyled = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(4),
  backgroundColor: "#ebedf0",
  boxShadow: "rgba(17, 12, 46, 0.2) 0px 48px 100px 0px;",
}));

const ColumnStyled = styled(Box)(({ theme }) => ({
  flexBasis: "50%",
  "&:nth-of-type(1)": {
    paddingRight: theme.spacing(1),
  },
  "&:nth-of-type(2)": {
    paddingLeft: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    flexBasis: "100%",
    "&:nth-of-type(1), &:nth-of-type(2)": {
      padding: theme.spacing(0),
    },
  },
}));

const ListStyled = styled(List)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  width: "100%",
  maxWidth: "600px",
  marginBottom: theme.spacing(3),
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  padding: theme.spacing(1.5, 3),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}));

export default Home;
