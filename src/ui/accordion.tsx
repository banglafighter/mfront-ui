import {WebAccordionProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function Accordion(props: WebAccordionProps) {
    const ui = useUI()
    const DaynaAccordion = ui.component.Accordion
    if (DaynaAccordion) {
        return <DaynaAccordion {...props} />
    }
    return UICommonUtil.notImplemented("Accordion")
}