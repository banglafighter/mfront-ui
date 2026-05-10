import {WebSidebarProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function Sidebar(props: WebSidebarProps) {
    const ui = useUI()
    const DaynaSidebar = ui.component.Sidebar
    if (DaynaSidebar) {
        return <DaynaSidebar {...props} />
    }
    return UICommonUtil.notImplemented("Sidebar")
}