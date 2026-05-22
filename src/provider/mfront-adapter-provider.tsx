import {mmReactCreateContext, mmReactUseContext} from "mmcore";
import {MFrontAdapterData} from "./mfront-adapter-data";
import {MFrontException} from "mfront-core";
import {UIAdapterData} from "./ui-adapter-data";

export const MFrontAdapterContext = mmReactCreateContext<MFrontAdapterData | null>(null)

export function MFrontAdapterProvider({adapter, children}: { adapter: MFrontAdapterData, children: any }) {
    return (
        <MFrontAdapterContext.Provider value={adapter}>
            {children}
        </MFrontAdapterContext.Provider>
    )
}


export function useUI(): UIAdapterData {
    const ctx = mmReactUseContext(MFrontAdapterContext)
    if (!ctx || !ctx.uiAdapterData) {
        throw new MFrontException("UIAdapterData not found. Wrap your app with UIAdapterProvider.")
    }
    return ctx.uiAdapterData
}