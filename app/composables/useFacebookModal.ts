import {ref} from 'vue'

const LAST_SHOW_KEY = 'fb-modal-last-show-v2'
const MODAL_INTERVAL_MS = 3 * 24 * 60 * 60 * 1000 // 3 days

export function useFacebookModal() {
    const show = ref(false)

    function checkAndShow() {
        const last = localStorage.getItem(LAST_SHOW_KEY)
        const now = Date.now()
        if (!last || now - Number(last) > MODAL_INTERVAL_MS) {
            show.value = true
            // Set the time when user sees the modal
            localStorage.setItem(LAST_SHOW_KEY, String(now))
        }
    }

    function close() {
        console.log('close click.')
        show.value = false
        // Update last show: respect close time, not showing on next refresh
        localStorage.setItem(LAST_SHOW_KEY, String(Date.now()))
    }

    return {
        show,
        checkAndShow,
        close,
    }
}
