import {WebTableEngineProps, WebTableGeneratorColumnProps} from "mmcore-ui";
import {mmReactUseRef, mmReactUseState, UINode} from "mmcore";


export default function useTableEngine(): WebTableEngineProps {
    const isInitColumns = mmReactUseRef<boolean>(false);
    const [dataList, setDataList] = mmReactUseState<Record<string, UINode>[]>([]);
    const columnsStore = mmReactUseRef<WebTableGeneratorColumnProps[]>([]);
    let dynamicColumns: WebTableGeneratorColumnProps[] = []

    const registerColumns = (columns: (columns: WebTableGeneratorColumnProps[]) => WebTableGeneratorColumnProps[]): WebTableGeneratorColumnProps[] => {
        if (!isInitColumns.current) {
            isInitColumns.current = true;
            columnsStore.current = columns([]);
        }
        return columnsStore.current
    }

    const loadData = (data: Record<string, UINode>[]) => {
        setDataList(data)
    }

    const addDynamicColumns = (columns: (columns: WebTableGeneratorColumnProps[]) => WebTableGeneratorColumnProps[]): void => {
        dynamicColumns = columns(dynamicColumns)
    }

    const getColumns = (): WebTableGeneratorColumnProps[] => {
        return [...columnsStore.current, ...dynamicColumns]
    }

    return {
        registerColumns,
        dataList,
        loadData,
        getColumns,
        addDynamicColumns
    }
}