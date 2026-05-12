import {UICommonUtil, useUI} from "mfront-ui";
import {
    WebDialogTitleProps,
    WebDialogBodyProps,
    WebDialogFooterProps,
    WebDialogHeaderProps,
    WebDialogProps, WebDialogSubTitleProps, WebDialogGeneratorProps
} from "mmcore-ui";


export function Dialog(props: WebDialogProps) {
    const ui = useUI()
    const DaynaDialog = ui.component.Dialog
    if (DaynaDialog) {
        return <DaynaDialog {...props} />
    }
    return UICommonUtil.notImplemented("Dialog")
}

export function DialogHeader(props: WebDialogHeaderProps) {
    const ui = useUI()
    const DaynaDialogHeader = ui.component.DialogHeader
    if (DaynaDialogHeader) {
        return <DaynaDialogHeader {...props} />
    }
    return UICommonUtil.notImplemented("DialogHeader")
}

export function DialogFooter(props: WebDialogFooterProps) {
    const ui = useUI()
    const DaynaDialogFooter = ui.component.DialogFooter
    if (DaynaDialogFooter) {
        return <DaynaDialogFooter {...props} />
    }
    return UICommonUtil.notImplemented("DialogFooter")
}

export function DialogBody(props: WebDialogBodyProps) {
    const ui = useUI()
    const DaynaDialogBody = ui.component.DialogBody
    if (DaynaDialogBody) {
        return <DaynaDialogBody {...props} />
    }
    return UICommonUtil.notImplemented("DialogBody")
}

export function DialogTitle(props: WebDialogTitleProps) {
    const ui = useUI()
    const DaynaDialogTitle = ui.component.DialogTitle
    if (DaynaDialogTitle) {
        return <DaynaDialogTitle {...props} />
    }
    return UICommonUtil.notImplemented("DialogTitle")
}

export function DialogSubTitle(props: WebDialogSubTitleProps) {
    const ui = useUI()
    const DaynaDialogSubTitle = ui.component.DialogSubTitle
    if (DaynaDialogSubTitle) {
        return <DaynaDialogSubTitle {...props} />
    }
    return UICommonUtil.notImplemented("DialogSubTitle")
}

export function DialogGenerator(props: WebDialogGeneratorProps) {
    const ui = useUI()
    const DaynaDialogGenerator = ui.component.DialogGenerator
    if (DaynaDialogGenerator) {
        return <DaynaDialogGenerator {...props} />
    }
    return UICommonUtil.notImplemented("DialogGenerator")
}