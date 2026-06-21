import {
    WebItemTitleProps,
    WebItemBodyProps,
    WebItemProps,
    WebItemSubTitleProps,
    WebItemActionProps,
    WebItemMediaProps
} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function Item(props: WebItemProps) {
    const ui = useUI()
    const DaynaItem = ui.component.Item
    if (DaynaItem) {
        return <DaynaItem {...props} />
    }
    return UICommonUtil.notImplemented("Item")
}

export function ItemBody(props: WebItemBodyProps) {
    const ui = useUI()
    const DaynaItemBody = ui.component.ItemBody
    if (DaynaItemBody) {
        return <DaynaItemBody {...props} />
    }
    return UICommonUtil.notImplemented("ItemBody")
}


export function ItemTitle(props: WebItemTitleProps) {
    const ui = useUI()
    const DaynaItemTitle = ui.component.ItemTitle
    if (DaynaItemTitle) {
        return <DaynaItemTitle {...props} />
    }
    return UICommonUtil.notImplemented("ItemTitle")
}

export function ItemSubTitle(props: WebItemSubTitleProps) {
    const ui = useUI()
    const DaynaItemSubTitle = ui.component.ItemSubTitle
    if (DaynaItemSubTitle) {
        return <DaynaItemSubTitle {...props} />
    }
    return UICommonUtil.notImplemented("ItemSubTitle")
}

export function ItemAction(props: WebItemActionProps) {
    const ui = useUI()
    const DaynaItemAction = ui.component.ItemAction
    if (DaynaItemAction) {
        return <DaynaItemAction {...props} />
    }
    return UICommonUtil.notImplemented("ItemAction")
}

export function ItemMedia(props: WebItemMediaProps) {
    const ui = useUI()
    const DaynaItemMedia = ui.component.ItemMedia
    if (DaynaItemMedia) {
        return <DaynaItemMedia {...props} />
    }
    return UICommonUtil.notImplemented("ItemMedia")
}