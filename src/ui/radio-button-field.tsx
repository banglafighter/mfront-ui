import {WebRadioButtonFieldProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function RadioButtonField(props: WebRadioButtonFieldProps) {
    const ui = useUI()
    const DaynaRadioButtonField = ui.component.RadioButtonField
    if (DaynaRadioButtonField) {
        return <DaynaRadioButtonField {...props} />
    }
    return UICommonUtil.notImplemented("RadioButtonField")
}