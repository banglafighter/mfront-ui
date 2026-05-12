import {DialogEngineOpenProps, WebDialogEngineProps, WebFieldSpec} from "mmcore-ui";
import {mmReactUseRef, mmReactUseState, UINode} from "mmcore";

export default function useDialogEngine(): WebDialogEngineProps {
    let actionData = mmReactUseRef<Record<string, UINode>>({})
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

    const getActionValue = (dataKey: string, defaultData?: UINode): UINode => {
        if (Object.prototype.hasOwnProperty.call(actionData.current, dataKey)) {
            return actionData.current[dataKey];
        }
        return defaultData;
    }

    return {
        close,
        open,
        isOpen,
        getActionValue
    }
}