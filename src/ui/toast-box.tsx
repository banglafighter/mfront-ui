import {useAppContext} from "mfront";
import {useUI} from "./../provider/ui-adapter-provider";
import {WebToastActionProps, WebToastProps} from "mmcore-ui";
import {UICommonUtil} from "./../common/ui-common-util";

export function ToastBox(props: WebToastProps) {
    const ui = useUI()
    const DaynaToastBox = ui.component.ToastBox
    if (DaynaToastBox) {
        return <DaynaToastBox {...props} />
    }
    return UICommonUtil.notImplemented("ToastBox")
}

export function toast(props: WebToastActionProps) {
    const {uiAction} = useAppContext.get();
    if (uiAction && uiAction.toastAction) {
        uiAction.toastAction(props)
    }
}