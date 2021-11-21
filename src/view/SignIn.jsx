import Button from '@/components/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Logo from '@/icons/Logo';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import imgSignInHeader from '@/assets/signIn-header.png'
import useUser from '@/hooks/useUser'
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  role: yup
    .string("Enter your rol")
    .required("rol is required"),
  username: yup
    .string("Enter your username")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
});

const theme = createTheme();

export default function SignIn() {
  const { login, isLoginLoading } = useUser()
  const formik = useFormik({
    initialValues: {
      role: "",
      username: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      login(values)
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${imgSignInHeader})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'rigth center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Logo width="300px" /> */}
            <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 8 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label-rol">Rol</InputLabel>
                <Select
                  labelId="demo-simple-select-label-rol"
                  id="demo-simple-select"
                  label="Rol"
                  name="role"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  error={formik.touched.role && Boolean(formik.errors.role)}
                  helperText={formik.touched.role && formik.errors.role}
                >
                  <MenuItem value="ADMIN">Admin</MenuItem>
                  <MenuItem value="MARKETING">Usuario</MenuItem>
                </Select>
              </FormControl>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Correo electrónico"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Contraseña"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                isLoading={isLoginLoading}
                sx={{ mt: 5, mb: 2 }}
              >
                Iniciar sesión
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}