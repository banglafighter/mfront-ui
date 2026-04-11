import {UIComponent} from "mmcore";
import {WebButtonGroupProps, WebButtonProps, WebSeperatorProps, WebToastProps} from "mmcore-ui";

export interface UIComponentSpec {
    ToastBox: UIComponent<WebToastProps>
    Button: UIComponent<WebButtonProps>
    ButtonGroup: UIComponent<WebButtonGroupProps>
    Separator: UIComponent<WebSeperatorProps>
}