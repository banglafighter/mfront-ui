import {WebInputFrameProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function InputFrame(props: WebInputFrameProps) {
    const ui = useUI()
    const DaynaInputFrame = ui.component.InputFrame
    if (DaynaInputFrame) {
        return <DaynaInputFrame {...props} />
    }
    return UICommonUtil.notImplemented("InputFrame")
}