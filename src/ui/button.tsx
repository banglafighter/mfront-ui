import {WebButtonProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function Button(props: WebButtonProps) {
    const ui = useUI()
    const DaynaButtonBox = ui.component.Button
    if (DaynaButtonBox) {
        return <DaynaButtonBox {...props} />
    }
    return UICommonUtil.notImplemented("Button")
}