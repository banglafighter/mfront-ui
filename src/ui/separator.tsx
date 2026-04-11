import {WebSeperatorProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function Separator(props: WebSeperatorProps) {
    const ui = useUI()
    const DaynaSeparator = ui.component.Separator
    if (DaynaSeparator) {
        return <DaynaSeparator {...props} />
    }
    return UICommonUtil.notImplemented("Separator")
}