import {WebSidebarContentProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function SidebarContent(props: WebSidebarContentProps) {
    const ui = useUI()
    const DaynaSidebarContent = ui.component.SidebarContent
    if (DaynaSidebarContent) {
        return <DaynaSidebarContent {...props} />
    }
    return UICommonUtil.notImplemented("SidebarContent")
}