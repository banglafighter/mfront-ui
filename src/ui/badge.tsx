import {WebBadgeProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function Badge(props: WebBadgeProps) {
    const ui = useUI()
    const DaynaBadge = ui.component.Badge
    if (DaynaBadge) {
        return <DaynaBadge {...props} />
    }
    return UICommonUtil.notImplemented("Badge")
}