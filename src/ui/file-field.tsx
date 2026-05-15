import {WebFileFieldProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function FileField(props: WebFileFieldProps) {
    const ui = useUI()
    const DaynaFileField = ui.component.FileField
    if (DaynaFileField) {
        return <DaynaFileField {...props} />
    }
    return UICommonUtil.notImplemented("FileField")
}