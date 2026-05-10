import {WebSidebarProviderProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function SidebarProvider(props: WebSidebarProviderProps) {
    const ui = useUI()
    const DaynaSidebarProvider = ui.component.SidebarProvider
    if (DaynaSidebarProvider) {
        return <DaynaSidebarProvider {...props} />
    }
    return UICommonUtil.notImplemented("SidebarProvider")
}