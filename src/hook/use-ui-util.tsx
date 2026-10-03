import {mmReactUseEffect, mmReactUseState} from "mmcore"
import {useAppContext} from "mfront"

export type ResponsiveView = "mobile" | "tablet" | "desktop"

interface UIUtilActions {
    isMobile: boolean
    isTablet: boolean
    isDesktop: boolean
    view: ResponsiveView
}

export default function useUIUtil(): UIUtilActions {
    const {config} = useAppContext.get()

    const mobileBreakpoint = config.mobileBreakpoint ?? 768
    const desktopBreakpoint = config.desktopBreakpoint ?? 1024

    const getView = (): ResponsiveView => {
        if (typeof window === "undefined") return "desktop"
        if (window.innerWidth >= desktopBreakpoint) return "desktop"
        if (window.innerWidth >= mobileBreakpoint) return "tablet"
        return "mobile"
    }

    const [view, setView] = mmReactUseState<ResponsiveView>(getView)

    mmReactUseEffect(() => {
        const mobileMedia = window.matchMedia(`(min-width: ${mobileBreakpoint}px)`)
        const desktopMedia = window.matchMedia(`(min-width: ${desktopBreakpoint}px)`)

        const onChange = () => setView(getView())

        mobileMedia.addEventListener("change", onChange)
        desktopMedia.addEventListener("change", onChange)

        onChange()

        return () => {
            mobileMedia.removeEventListener("change", onChange)
            desktopMedia.removeEventListener("change", onChange)
        }
    }, [mobileBreakpoint, desktopBreakpoint])

    return {
        isMobile: view === "mobile",
        isTablet: view === "tablet",
        isDesktop: view === "desktop",
        view,
    }
}