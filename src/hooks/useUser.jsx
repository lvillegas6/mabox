import { useCallback, useState } from 'react'
import { loginService } from '@/service/user'
import { signIn, signOut } from '@/store/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "wouter";


export default function useUser() {
  const dispatch = useDispatch();
  const userType = useSelector((store) => store.auth.userType);
  const jwt = useSelector((store) => store.auth.jwt);
  const [state, setState] = useState({ loading: false, error: false })
  const [, setLocation] = useLocation();

  const login = useCallback((user) => {
    setState({ loading: true, error: false })
    loginService({ user })
      .then(jwt => {
        setState({ loading: false, error: false })
        dispatch(signIn({ jwt }))
        setLocation("/admin")
      })
      .catch(err => {
        setState({ loading: false, error: true })
        alert(err)
      })
  }, [signIn])

  const logout = useCallback(() => {
    dispatch(signOut())
    setLocation("/")
  }, [signOut])



  return {
    userType,
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout
  }
}