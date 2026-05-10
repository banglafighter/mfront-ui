import {UIComponent} from "mmcore";
import {
    WebButtonGroupProps,
    WebButtonProps, WebCardActionProps, WebCardBodyProps, WebCardFooterProps, WebCardHeaderProps,
    WebCardProps, WebCardSubTitleProps, WebCardTitleProps, WebDropdownProps, WebFieldGeneratorProps,
    WebFieldGroupProps, WebGridItemProps, WebGridProps,
    WebInputFieldProps, WebInputFrameProps,
    WebInputProps,
    WebLoaderProps, WebSelectFieldProps,
    WebSeperatorProps, WebSidebarContentProps, WebSidebarProps, WebSidebarProviderProps,
    WebSidebarTogglerProps, WebTextareaProps,
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

    Grid: UIComponent<WebGridProps>
    GridItem: UIComponent<WebGridItemProps>

    InputFrame: UIComponent<WebInputFrameProps>
    InputField: UIComponent<WebInputFieldProps>
    Input: UIComponent<WebInputProps>
    Textarea: UIComponent<WebTextareaProps>
    SelectField: UIComponent<WebSelectFieldProps>

    FieldGenerator: UIComponent<WebFieldGeneratorProps>
    FieldGroup: UIComponent<WebFieldGroupProps>
    Dropdown: UIComponent<WebDropdownProps>

    Sidebar: UIComponent<WebSidebarProps>
    SidebarContent: UIComponent<WebSidebarContentProps>
    SidebarProvider: UIComponent<WebSidebarProviderProps>
    SidebarToggler: UIComponent<WebSidebarTogglerProps>
}