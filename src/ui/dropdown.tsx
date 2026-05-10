import {WebDropdownProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function Dropdown(props: WebDropdownProps) {
    const ui = useUI()
    const DaynaDropdown = ui.component.Dropdown
    if (DaynaDropdown) {
        return <DaynaDropdown {...props} />
    }
    return UICommonUtil.notImplemented("Dropdown")
}