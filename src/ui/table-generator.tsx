import {UICommonUtil, useUI} from "mfront-ui";
import {WebTableGeneratorProps} from "mmcore-ui";


export function TableGenerator(props: WebTableGeneratorProps) {
    const ui = useUI()
    const DaynaTableGenerator = ui.component.TableGenerator
    if (DaynaTableGenerator) {
        return <DaynaTableGenerator {...props} />
    }
    return UICommonUtil.notImplemented("TableGenerator")
}