import {WebInputProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function Input(props: WebInputProps) {
    const ui = useUI()
    const DaynaInput = ui.component.Input
    if (DaynaInput) {
        return <DaynaInput {...props} />
    }
    return UICommonUtil.notImplemented("Input")
}