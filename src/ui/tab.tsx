import {UICommonUtil, useUI} from "mfront-ui";
import {WebTabProps} from "mmcore-ui";


export function Tab(props: WebTabProps) {
    const ui = useUI()
    const DaynaTab = ui.component.Tab
    if (DaynaTab) {
        return <DaynaTab {...props} />
    }
    return UICommonUtil.notImplemented("Tab")
}