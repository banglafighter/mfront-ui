import {UICommonUtil, useUI} from "mfront-ui";
import {WebDateTimeFieldProps} from "mmcore-ui";


export function DateTimeField(props: WebDateTimeFieldProps) {
    const ui = useUI()
    const DaynaDateTimeField = ui.component.DateTimeField
    if (DaynaDateTimeField) {
        return <DaynaDateTimeField {...props} />
    }
    return UICommonUtil.notImplemented("DateTimeField")
}