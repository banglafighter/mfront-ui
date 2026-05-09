import {WebSelectFieldProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function SelectField(props: WebSelectFieldProps) {
    const ui = useUI()
    const DaynaSelectField = ui.component.SelectField
    if (DaynaSelectField) {
        return <DaynaSelectField {...props} />
    }
    return UICommonUtil.notImplemented("SelectField")
}