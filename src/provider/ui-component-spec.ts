import {UIComponent} from "mmcore";
import {WebButtonProps, WebSeperatorProps, WebToastProps} from "mmcore-ui";

export interface UIComponentSpec {
    ToastBox: UIComponent<WebToastProps>
    Button: UIComponent<WebButtonProps>
    Separator: UIComponent<WebSeperatorProps>
}