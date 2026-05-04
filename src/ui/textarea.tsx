import {WebTextareaProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function Textarea(props: WebTextareaProps) {
    const ui = useUI()
    const DaynaTextarea = ui.component.Textarea
    if (DaynaTextarea) {
        return <DaynaTextarea {...props} />
    }
    return UICommonUtil.notImplemented("Textarea")
}