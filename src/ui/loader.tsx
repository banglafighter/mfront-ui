import {UICommonUtil, useUI} from "mfront-ui";
import {WebLoaderProps} from "mmcore-ui";


export function Loader(props: WebLoaderProps) {
    const ui = useUI()
    const DaynaLoader = ui.component.Loader
    if (DaynaLoader) {
        return <DaynaLoader {...props} />
    }
    return UICommonUtil.notImplemented("Loader")
}