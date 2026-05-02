import {MixType} from "mmcore";

export const UICommonUtil = {
    notImplemented(name: string, postMessage: string = "not implemented") {
        return (<>{name} {postMessage}</>)
    },
    extractGridItemProps(props: Map<string, MixType>) {
        const gridItemPropsKeys: Array<string> = ["colSpan", "rowSpan", "colStart", "colEnd", "rowStart", "rowEnd", "colSpanMob", "colSpanTab", "colSpanLarge", "rowSpanMob", "rowSpanTab", "rowSpanLarge", "colStartMob", "colStartTab", "colStartLarge", "colEndMob", "colEndTab", "colEndLarge", "rowStartMob", "rowStartTab", "rowStartLarge", "rowEndMob", "rowEndTab", "rowEndLarge"]
        const gridItemProps: Map<string, MixType> = new Map<string, MixType>()
        const otherProps: Map<string, MixType> = new Map<string, MixType>()

        Object.entries(props).forEach(([k, v]) => {
            if (gridItemPropsKeys.includes(k)) {
                gridItemProps.set(k, v)
            } else {
                otherProps.set(k, v)
            }
        })

        return {
            gridItemProps,
            otherProps
        }
    }
}