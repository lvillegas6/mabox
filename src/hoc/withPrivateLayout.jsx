import MiniDrawer from '../components/MiniDrawer'
import useUser from '@/hooks/useUser'
export const withPrivateLayout = (Component) => () => {
  const { isLogged, logout } = useUser()

  if(!isLogged){
    logout()
    return null
  }

  return (
      <MiniDrawer>
          <Component />
      </MiniDrawer>
  );
};
