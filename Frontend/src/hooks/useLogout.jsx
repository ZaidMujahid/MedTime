import { useAuthContext } from './useAuthContext'
import { useRemindersContext } from './useRemindersContext'


export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: remindersDispatch } = useRemindersContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    remindersDispatch({ type: 'SET_REMINDERS', payload: null})
  }

  return { logout }
}