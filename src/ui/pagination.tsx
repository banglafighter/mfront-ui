import {UICommonUtil, useUI} from "mfront-ui";
import {WebPaginationProps} from "mmcore-ui";


export function Pagination(props: WebPaginationProps) {
    const ui = useUI()
    const DaynaPagination = ui.component.Pagination
    if (DaynaPagination) {
        return <DaynaPagination {...props} />
    }
    return UICommonUtil.notImplemented("Pagination")
}