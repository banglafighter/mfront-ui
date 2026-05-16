import {UIComponent} from "mmcore";
import {
    WebButtonGroupProps,
    WebButtonProps, WebCalendarProps, WebCardActionProps, WebCardBodyProps, WebCardFooterProps, WebCardHeaderProps,
    WebCardProps, WebCardSubTitleProps, WebCardTitleProps, WebCheckFieldProps, WebDialogBodyProps, WebDialogFooterProps,
    WebDialogGeneratorProps,
    WebDialogHeaderProps, WebDialogProps,
    WebDialogSubTitleProps, WebDialogTitleProps, WebDropdownProps, WebFieldGeneratorProps,
    WebFieldGroupProps, WebFileFieldProps, WebGridItemProps, WebGridProps, WebImageProps,
    WebInputFieldProps, WebInputFrameProps,
    WebInputProps,
    WebLoaderProps, WebPaginationProps, WebPopoverProps, WebSelectFieldProps,
    WebSeperatorProps, WebSidebarContentProps, WebSidebarProps, WebSidebarProviderProps,
    WebSidebarTogglerProps, WebTableGeneratorProps, WebTableProps, WebTabProps, WebTBodyProps,
    WebTDProps, WebTextareaProps, WebTFootProps, WebTHeadProps,
    WebTHProps,
    WebToastProps, WebTRProps
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
    FileField: UIComponent<WebFileFieldProps>
    CheckField: UIComponent<WebCheckFieldProps>

    FieldGenerator: UIComponent<WebFieldGeneratorProps>
    FieldGroup: UIComponent<WebFieldGroupProps>
    Dropdown: UIComponent<WebDropdownProps>
    Popover: UIComponent<WebPopoverProps>

    Sidebar: UIComponent<WebSidebarProps>
    SidebarContent: UIComponent<WebSidebarContentProps>
    SidebarProvider: UIComponent<WebSidebarProviderProps>
    SidebarToggler: UIComponent<WebSidebarTogglerProps>

    Dialog: UIComponent<WebDialogProps>
    DialogHeader: UIComponent<WebDialogHeaderProps>
    DialogFooter: UIComponent<WebDialogFooterProps>
    DialogBody: UIComponent<WebDialogBodyProps>
    DialogTitle: UIComponent<WebDialogTitleProps>
    DialogSubTitle: UIComponent<WebDialogSubTitleProps>
    DialogGenerator: UIComponent<WebDialogGeneratorProps>

    Image: UIComponent<WebImageProps>
    Tab: UIComponent<WebTabProps>

    Table: UIComponent<WebTableProps>
    THead: UIComponent<WebTHeadProps>
    TFoot: UIComponent<WebTFootProps>
    TBody: UIComponent<WebTBodyProps>
    TR: UIComponent<WebTRProps>
    TH: UIComponent<WebTHProps>
    TD: UIComponent<WebTDProps>
    TableGenerator: UIComponent<WebTableGeneratorProps>
    Pagination: UIComponent<WebPaginationProps>

    Calendar: UIComponent<WebCalendarProps>
}