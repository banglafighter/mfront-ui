import {UIComponentSpec} from "./ui-component-spec";
import {UIActionSpec} from "./ui-action-spec";
import {UIComponent} from "mmcore";


export interface UIAdapterData {
    component: UIComponentSpec
    action: UIActionSpec

    customComponent: Record<string, UIComponent<unknown>>
    customAction: Record<string, UIComponent<unknown>>
}