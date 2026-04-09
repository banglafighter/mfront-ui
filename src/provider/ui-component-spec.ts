import {UIComponent} from "mmcore";
import {WebButtonProps, WebToastProps} from "mmcore-ui";

export interface UIComponentSpec {
    ToastBox: UIComponent<WebToastProps>
    Button: UIComponent<WebButtonProps>
}