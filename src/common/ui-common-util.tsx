import {MixType} from "mmcore";

export const UICommonUtil = {
    notImplemented(name: string, postMessage: string = "not implemented") {
        return (<>{name} {postMessage}</>)
    },
    extractGridItemProps(props: Record<string, MixType>) {
        const gridItemPropsKeys: Array<string> = ["colSpan", "rowSpan", "colStart", "colEnd", "rowStart", "rowEnd", "colSpanMob", "colSpanTab", "colSpanLarge", "rowSpanMob", "rowSpanTab", "rowSpanLarge", "colStartMob", "colStartTab", "colStartLarge", "colEndMob", "colEndTab", "colEndLarge", "rowStartMob", "rowStartTab", "rowStartLarge", "rowEndMob", "rowEndTab", "rowEndLarge", "aux"]
        const gridItemProps: Record<string, MixType> = {}
        const otherProps: Record<string, MixType> = {}

        Object.entries(props).forEach(([k, v]) => {
            if (gridItemPropsKeys.includes(k)) {
                gridItemProps[k] = v
            } else {
                otherProps[k] = v
            }
        })

        return {
            gridItemProps,
            otherProps
        }
    },
    extractGridProps(props: Record<string, MixType>) {
        const gridPropsKeys: Array<string> = ["cols", "rows", "flow", "gap", "colGap", "rowGap", "colsMob", "colsTab", "colsLarge", "rowsMob", "rowsTab", "rowsLarge", "gapMob", "gapTab", "aux"]
        const gridProps: Record<string, MixType> = {}
        const otherProps: Record<string, MixType> = {}

        Object.entries(props).forEach(([k, v]) => {
            if (gridPropsKeys.includes(k)) {
                gridProps[k] = v
            } else {
                otherProps[k] = v
            }
        })

        return {
            gridProps,
            otherProps
        }
    }
}