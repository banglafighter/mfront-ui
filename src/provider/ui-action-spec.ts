import {WebToastActionProps} from "mmcore-ui";

export interface UIActionSpec {
    toastAction: (props: WebToastActionProps) => void
}