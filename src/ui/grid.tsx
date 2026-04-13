import {WebGridItemProps, WebGridProps} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function Grid(props: WebGridProps) {
    const ui = useUI()
    const DaynaGrid = ui.component.Grid
    if (DaynaGrid) {
        return <DaynaGrid {...props} />
    }
    return UICommonUtil.notImplemented("Grid")
}

export function GridItem(props: WebGridItemProps) {
    const ui = useUI()
    const DaynaGridItem = ui.component.GridItem
    if (DaynaGridItem) {
        return <DaynaGridItem {...props} />
    }
    return UICommonUtil.notImplemented("GridItem")
}