import {WebButtonGroupProps, WebButtonProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function Button(props: WebButtonProps) {
    const ui = useUI()
    const DaynaButton = ui.component.Button
    if (DaynaButton) {
        return <DaynaButton {...props} />
    }
    return UICommonUtil.notImplemented("Button")
}

export function ButtonGroup(props: WebButtonGroupProps) {
    const ui = useUI()
    const DaynaButtonGroup = ui.component.ButtonGroup
    if (DaynaButtonGroup) {
        return <DaynaButtonGroup {...props} />
    }
    return UICommonUtil.notImplemented("Button")
}