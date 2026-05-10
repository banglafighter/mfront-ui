import {WebSidebarTogglerProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function SidebarToggler(props: WebSidebarTogglerProps) {
    const ui = useUI()
    const DaynaSidebarToggler = ui.component.SidebarToggler
    if (DaynaSidebarToggler) {
        return <DaynaSidebarToggler {...props} />
    }
    return UICommonUtil.notImplemented("SidebarToggler")
}