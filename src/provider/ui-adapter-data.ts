import UIActionSpec from "./ui-action-spec"
import UIComponentSpec from "./ui-component-spec"


export default interface UIAdapterData {
    component: UIComponentSpec
    action: UIActionSpec
}