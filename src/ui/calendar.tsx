import {UICommonUtil, useUI} from "mfront-ui";
import {WebCalendarProps} from "mmcore-ui";


export function Calendar(props: WebCalendarProps) {
    const ui = useUI()
    const DaynaCalendar = ui.component.Calendar
    if (DaynaCalendar) {
        return <DaynaCalendar {...props} />
    }
    return UICommonUtil.notImplemented("Calendar")
}