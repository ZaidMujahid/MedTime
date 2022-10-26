import { RemindersContext } from "../context/ReminderContext";
import { useContext } from "react";

export const useRemindersContext = () => {
    const context = useContext(RemindersContext)

    if(!context) {
        throw Error('useRemindersContext must be used inside RemindersContextProvider')
    }

    return context
}