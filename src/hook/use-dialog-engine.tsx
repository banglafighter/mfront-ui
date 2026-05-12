import {
    DialogEngineConfirmAlertProps, DialogEngineOpenProps,
    DialogFooterActionButton, WebDialogEngineProps, WebFieldSpec
} from "mmcore-ui";
import {mmReactUseRef, mmReactUseState, UINode} from "mmcore";

export default function useDialogEngine(): WebDialogEngineProps {
    let actionData = mmReactUseRef<Record<string, UINode | DialogFooterActionButton[]>>({})
    const [isOpen, setOpen] = mmReactUseState(false);
    const open = (props: DialogEngineOpenProps) => {
        actionData.current = {}
        const _actionData = actionData.current
        if (props.title) {
            _actionData.title = props.title
        }
        if (props.subTitle) {
            _actionData.subTitle = props.subTitle
        }

        if (props.slideFrom) {
            _actionData.slideFrom = props.slideFrom
        }
        setOpen(true);
    }

    const close = () => {
        setOpen(false);
    }

    const confirm = (props: DialogEngineConfirmAlertProps) => {
        actionData.current = {}
        const _actionData = actionData.current
        if (props.title) {
            _actionData.title = props.title
        }else {
            _actionData.title = "Confirmation"
        }

        if (props.subTitle) {
            _actionData.subTitle = props.subTitle
        }

        _actionData.dialogSize = "tiny"
        if (props.dialogSize) {
            _actionData.dialogSize = props.dialogSize
        }

        _actionData.type = "alert"
        _actionData.body = props.body

        let footerActionButtons: DialogFooterActionButton[] = []
        if (!props.disableCancelButton) {
            footerActionButtons.push({
                label: "Cancel",
                variant: "outline",
                onClick: (data?: unknown) => {
                    close()
                }
            })
        }

        if (props.footerActionButtons) {
            footerActionButtons = [...footerActionButtons, ...props.footerActionButtons]
        }

        footerActionButtons.push({
            label: props.confirmButtonLabel ? props.confirmButtonLabel : "Confirm",
            variant: props.confirmButtonVariant ? props.confirmButtonVariant : "primary",
            onClick: (data?: unknown) => {
                if (props.confirmButtonAction) {
                    props.confirmButtonAction(props.confirmCallbackData)
                }
                close()
            }
        })
        _actionData.footerActionButtons = footerActionButtons
        setOpen(true)
    }

    const getActionValue = <T = UINode | DialogFooterActionButton[] | undefined>(dataKey: string, defaultData?: T): T => {
        if (Object.prototype.hasOwnProperty.call(actionData.current, dataKey)) {
            return actionData.current[dataKey] as T;
        }
        return defaultData as T;
    }

    return {
        close,
        open,
        isOpen,
        getActionValue,
        confirm
    }
}