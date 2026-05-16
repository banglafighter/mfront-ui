import {UICommonUtil, useUI} from "mfront-ui";
import {WebPopoverProps} from "mmcore-ui";


export function Popover(props: WebPopoverProps) {
    const ui = useUI()
    const DaynaPopover = ui.component.Popover
    if (DaynaPopover) {
        return <DaynaPopover {...props} />
    }
    return UICommonUtil.notImplemented("Popover")
}