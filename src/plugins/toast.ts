import { useToast } from "vue-toastification";

const init = useToast()

const toast = {
    success: (message: string) => {
        init.success(message)
    },
    error: (message: string) => {
        init.error(message)
    },
    warning: (message: string) => {
        init.warning(message)
    },
}

export default toast