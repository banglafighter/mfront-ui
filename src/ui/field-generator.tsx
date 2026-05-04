import {WebFieldGeneratorProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function FieldGenerator(props: WebFieldGeneratorProps) {
    const ui = useUI()
    const DaynaFieldGenerator = ui.component.FieldGenerator
    if (DaynaFieldGenerator) {
        return <DaynaFieldGenerator {...props} />
    }
    return UICommonUtil.notImplemented("FieldGenerator")
}