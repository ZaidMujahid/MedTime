import { useRemindersContext } from './useRemindersContext'


export const useChange = () => {
  const { dispatch: remindersDispatch } = useRemindersContext()

  const change = () => {
    // remove user from storage

    // dispatch logout action
    remindersDispatch({ type: 'SET_REMINDERS', payload: null})
  }

  return { change }
}