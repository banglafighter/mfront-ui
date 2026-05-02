import {WebInputFieldProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function InputField(props: WebInputFieldProps) {
    const ui = useUI()
    const DaynaInputField = ui.component.InputField
    if (DaynaInputField) {
        return <DaynaInputField {...props} />
    }
    return UICommonUtil.notImplemented("InputField")
}