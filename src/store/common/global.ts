import { getLocalStorage } from "@src/utils/storage"
import create from 'zustand'

export interface GlobalStore {
    locale: 'zh_CN' | 'en_US'
    loading: boolean
    toogleLoading: (val: boolean) => void
    changeLocale: (locale: 'zh_CN' | 'en_US') => void
}

const store = create<GlobalStore>((set) => ({
    locale:(getLocalStorage('semi_local') as 'zh_CN' | 'en_US' ) || 'zh_CN',
    loading: false,
    toogleLoading: (val = false) => set({ loading: val }),
    changeLocale: (val: 'zh_CN' | 'en_US') => {
        if (val === 'zh_CN') {
            set({ locale: 'zh_CN' })
        } else {
            set({ locale: 'en_US' })
        }
    },
}))

const { getState, setState, subscribe, destroy } = store

export { getState, setState, subscribe, destroy }

export default store