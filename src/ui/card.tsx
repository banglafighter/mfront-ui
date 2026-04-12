import {
    WebCardActionProps,
    WebCardBodyProps,
    WebCardFooterProps,
    WebCardHeaderProps,
    WebCardProps,
    WebCardSubTitleProps,
    WebCardTitleProps
} from "mmcore-ui";
import {UICommonUtil, useUI} from "mfront-ui";


export function Card(props: WebCardProps) {
    const ui = useUI()
    const DaynaCard = ui.component.Card
    if (DaynaCard) {
        return <DaynaCard {...props} />
    }
    return UICommonUtil.notImplemented("Card")
}

export function CardHeader(props: WebCardHeaderProps) {
    const ui = useUI()
    const DaynaCardHeader = ui.component.CardHeader
    if (DaynaCardHeader) {
        return <DaynaCardHeader {...props} />
    }
    return UICommonUtil.notImplemented("CardHeader")
}

export function CardFooter(props: WebCardFooterProps) {
    const ui = useUI()
    const DaynaCardFooter = ui.component.CardFooter
    if (DaynaCardFooter) {
        return <DaynaCardFooter {...props} />
    }
    return UICommonUtil.notImplemented("CardFooter")
}

export function CardBody(props: WebCardBodyProps) {
    const ui = useUI()
    const DaynaCardBody = ui.component.CardBody
    if (DaynaCardBody) {
        return <DaynaCardBody {...props} />
    }
    return UICommonUtil.notImplemented("CardBody")
}


export function CardTitle(props: WebCardTitleProps) {
    const ui = useUI()
    const DaynaCardTitle = ui.component.CardTitle
    if (DaynaCardTitle) {
        return <DaynaCardTitle {...props} />
    }
    return UICommonUtil.notImplemented("CardTitle")
}

export function CardSubTitle(props: WebCardSubTitleProps) {
    const ui = useUI()
    const DaynaCardSubTitle = ui.component.CardSubTitle
    if (DaynaCardSubTitle) {
        return <DaynaCardSubTitle {...props} />
    }
    return UICommonUtil.notImplemented("CardSubTitle")
}

export function CardAction(props: WebCardActionProps) {
    const ui = useUI()
    const DaynaCardAction = ui.component.CardAction
    if (DaynaCardAction) {
        return <DaynaCardAction {...props} />
    }
    return UICommonUtil.notImplemented("CardAction")
}