import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";
import { CustomizedCardHeader } from "./styles";

const Login = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card sx={{ maxWidth: 480 }}>
        <CustomizedCardHeader
          title="TaFeito"
          subheader="Transforme suas tarefas em ações"
        ></CustomizedCardHeader>
        <CardContent>
          <Box py={1}>
            <TextField
              fullWidth
              id="username"
              label="Usuário"
              variant="filled"
            />
          </Box>
          <Box py={1}>
            <TextField fullWidth id="password" label="Senha" variant="filled" />
          </Box>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained">
            Login
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Login;
