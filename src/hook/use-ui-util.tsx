import {mmReactUseEffect, mmReactUseState} from "mmcore";
import {useAppContext} from "mfront";


interface UIUtilActions {
    isMobile: boolean
}


export default function useUIUtil(): UIUtilActions {
    const {config} = useAppContext.get()
    const [isMobile, setIsMobile] = mmReactUseState<boolean>(false)

    mmReactUseEffect(() => {
        const MOBILE_BREAKPOINT = config.mobileBreakpoint ?? 768
        const mediaQueryList = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
        const onChange = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
        }
        mediaQueryList.addEventListener("change", onChange)
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
        return () => mediaQueryList.removeEventListener("change", onChange)
    }, [])

    return {
        isMobile,
    }
}