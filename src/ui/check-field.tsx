import {WebCheckFieldProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function CheckField(props: WebCheckFieldProps) {
    const ui = useUI()
    const DaynaCheckField = ui.component.CheckField
    if (DaynaCheckField) {
        return <DaynaCheckField {...props} />
    }
    return UICommonUtil.notImplemented("CheckField")
}