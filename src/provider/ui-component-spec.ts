import {UIComponent} from "mmcore";
import {
    WebButtonGroupProps,
    WebButtonProps,
    WebLoaderProps,
    WebSeperatorProps,
    WebToastProps
} from "mmcore-ui";

export interface UIComponentSpec {
    ToastBox: UIComponent<WebToastProps>
    Button: UIComponent<WebButtonProps>
    ButtonGroup: UIComponent<WebButtonGroupProps>
    Separator: UIComponent<WebSeperatorProps>
    Loader: UIComponent<WebLoaderProps>
}