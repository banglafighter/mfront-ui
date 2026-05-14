import {UICommonUtil, useUI} from "mfront-ui";
import {
    WebTHeadProps,
    WebTableProps,
    WebTFootProps,
    WebTBodyProps,
    WebTRProps,
    WebTHProps,
    WebTDProps
} from "mmcore-ui";


export function Table(props: WebTableProps) {
    const ui = useUI()
    const DaynaTable = ui.component.Table
    if (DaynaTable) {
        return <DaynaTable {...props} />
    }
    return UICommonUtil.notImplemented("Table")
}

export function THead(props: WebTHeadProps) {
    const ui = useUI()
    const DaynaTHead = ui.component.THead
    if (DaynaTHead) {
        return <DaynaTHead {...props} />
    }
    return UICommonUtil.notImplemented("THead")
}

export function TFoot(props: WebTFootProps) {
    const ui = useUI()
    const DaynaTFoot = ui.component.TFoot
    if (DaynaTFoot) {
        return <DaynaTFoot {...props} />
    }
    return UICommonUtil.notImplemented("TFoot")
}

export function TBody(props: WebTBodyProps) {
    const ui = useUI()
    const DaynaTBody = ui.component.TBody
    if (DaynaTBody) {
        return <DaynaTBody {...props} />
    }
    return UICommonUtil.notImplemented("TBody")
}

export function TR(props: WebTRProps) {
    const ui = useUI()
    const DaynaTR = ui.component.TR
    if (DaynaTR) {
        return <DaynaTR {...props} />
    }
    return UICommonUtil.notImplemented("TR")
}


export function TH(props: WebTHProps) {
    const ui = useUI()
    const DaynaTH = ui.component.TH
    if (DaynaTH) {
        return <DaynaTH {...props} />
    }
    return UICommonUtil.notImplemented("TH")
}

export function TD(props: WebTDProps) {
    const ui = useUI()
    const DaynaTD = ui.component.TD
    if (DaynaTD) {
        return <DaynaTD {...props} />
    }
    return UICommonUtil.notImplemented("TD")
}