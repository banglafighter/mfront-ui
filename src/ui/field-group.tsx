import {WebFieldGroupProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function FieldGroup(props: WebFieldGroupProps) {
    const ui = useUI()
    const DaynaFieldGroup = ui.component.FieldGroup
    if (DaynaFieldGroup) {
        return <DaynaFieldGroup {...props} />
    }
    return UICommonUtil.notImplemented("FieldGroup")
}