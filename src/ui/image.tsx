import {UICommonUtil, useUI} from "mfront-ui";
import {WebImageProps} from "mmcore-ui";


export function Image(props: WebImageProps) {
    const ui = useUI()
    const DaynaImage = ui.component.Image
    if (DaynaImage) {
        return <DaynaImage {...props} />
    }
    return UICommonUtil.notImplemented("Image")
}