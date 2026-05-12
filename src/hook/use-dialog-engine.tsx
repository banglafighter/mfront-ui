import {DialogSlideFrom, WebDialogEngineProps} from "mmcore-ui";

export default function useDialogEngine(): WebDialogEngineProps {
    const open = (title?: string, subTitle?: string, slideFrom?: DialogSlideFrom) => {

    }
    const close = () => {
    }

    return {
        close,
        open,
    }
}