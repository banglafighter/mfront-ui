import {MMReactChangeEvent, MMReactRefObject, mmReactUseEffect, mmReactUseRef} from "mmcore";
import {FieldValueType, InputElementType, WebFieldEngineProps} from "mmcore-ui";


interface FieldHelper<T extends InputElementType> {
    fieldRef: MMReactRefObject<T | null>
    handleChange: (event: MMReactChangeEvent<T>, ignoreNull?: boolean) => void
    setFieldValue: (name: string, value: FieldValueType, event?: MMReactChangeEvent<T>) => void
}

interface FieldHelperProps<T extends InputElementType> {
    name: string
    defaultValue?: FieldValueType
    engine?: WebFieldEngineProps
    onChange?: (event: MMReactChangeEvent<T>) => void
}

export default function useFieldHelper<T extends InputElementType>({ name, defaultValue, engine, onChange}: FieldHelperProps<T>): FieldHelper<T> {
    const fieldRef = mmReactUseRef<T>(null)

    mmReactUseEffect(() => {
        if (fieldRef.current) {
            engine?.registerRefs(name, fieldRef.current)
        }
        return () => engine?.unregisterRefs(name)
    }, [])

    mmReactUseEffect(() => {
        if (defaultValue !== undefined && fieldRef.current) {
            fieldRef.current.value = String(defaultValue);
            engine?.setFieldValue(name, defaultValue)
        }
    }, [defaultValue])

    const handleChange = (event: MMReactChangeEvent<T>, ignoreNull?: boolean) => {
        engine?.setFieldValue(name, event.target.value, ignoreNull)
        if (onChange) {
            onChange(event)
        }
    }

    const setFieldValue = (name: string, value: FieldValueType, event?: MMReactChangeEvent<T>) => {
        engine?.setFieldValue(name, value)
        if (onChange && event) {
            onChange(event)
        }
    }

    return {
        fieldRef,
        setFieldValue,
        handleChange
    }
}