//views
import SignIn from '@/view/SignIn'
import Dashboard from '@/view/Dashboard'
import MinorBox from '@/view/MinorBox'
import Headquarters from '@/view/Headquarters'
import Reports from '@/view/Reports'
import Users from '@/view/Users'

//hoc's
import { withPrivateLayout } from '@/hoc/withPrivateLayout'

//icons
import AppsIcon from '@mui/icons-material/Apps';
import AddBoxIcon from '@mui/icons-material/AddBox';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

const route = [
    {
        path: '/',
        name: 'Login',
        private: false,
        component: SignIn,
    },
    {
        path: '/admin',
        name: 'Inicio',
        private: true,
        icon: AppsIcon,
        component: withPrivateLayout(Dashboard),
    },
    {
        path: '/admin/caja',
        name: 'Caja menor',
        private: true,
        icon: AddBoxIcon,
        component: withPrivateLayout(MinorBox),
    },
    {
        path: '/admin/sedes',
        name: 'Sedes',
        private: true,
        icon: HomeWorkIcon,
        component: withPrivateLayout(Headquarters),
    },
    {
        path: '/admin/usuarios',
        name: 'Usuarios',
        private: true,
        icon: SupervisedUserCircleIcon,
        component: withPrivateLayout(Users),
    },
    {
        path: '/admin/reportes',
        name: 'Reportes',
        private: true,
        icon: AssessmentIcon,
        component: withPrivateLayout(Reports),
    },
    {
        path: '',
        private: false,
        component: () => <div>error</div>,
    }
]

export default route