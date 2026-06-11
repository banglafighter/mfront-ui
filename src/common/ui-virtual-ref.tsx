import {MMReactRefObject} from "mmcore";

export interface InputElementVirtualRef {
    getValue?: () => string
    setValue?: (value: string) => void
}

function createInputElementVirtualRef<T>(props: InputElementVirtualRef): T {
    return {
        get value() {
            if (props.getValue) {
                return props.getValue()
            }
            return ""
        },
        set value(value: string) {
            if (props.setValue) {
                props.setValue(value)
            }
        },
    } as T;
}

export function setInputElementVirtualRef(fieldRef: MMReactRefObject<HTMLInputElement | null>, props: InputElementVirtualRef): void {
    if (fieldRef) {
        fieldRef.current = createInputElementVirtualRef<HTMLInputElement>(props)
    }
}

export function setSelectElementElementVirtualRef(fieldRef: MMReactRefObject<HTMLSelectElement | null>, props: InputElementVirtualRef): void {
    if (fieldRef) {
        fieldRef.current = createInputElementVirtualRef<HTMLSelectElement>(props)
    }
}