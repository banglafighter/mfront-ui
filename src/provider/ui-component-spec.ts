import {UIComponent} from "mmcore";
import {
    WebButtonGroupProps,
    WebButtonProps, WebCardActionProps, WebCardBodyProps, WebCardFooterProps, WebCardHeaderProps,
    WebCardProps, WebCardSubTitleProps, WebCardTitleProps,
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

    Card: UIComponent<WebCardProps>
    CardHeader: UIComponent<WebCardHeaderProps>
    CardFooter: UIComponent<WebCardFooterProps>
    CardBody: UIComponent<WebCardBodyProps>
    CardTitle: UIComponent<WebCardTitleProps>
    CardSubTitle: UIComponent<WebCardSubTitleProps>
    CardAction: UIComponent<WebCardActionProps>
}