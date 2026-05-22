import {MFrontAdapterContext, MFrontException} from "mfront-core";
import { UIAdapterData } from "./ui-adapter-data";
import {mmReactUseContext} from "mmcore";

export function useUI(): UIAdapterData {
    const ctx = mmReactUseContext(MFrontAdapterContext)
    if (!ctx || !ctx.uiAdapterData) {
        throw new MFrontException("UIAdapterData not found. Wrap your app with UIAdapterProvider.")
    }
    return ctx.uiAdapterData
}