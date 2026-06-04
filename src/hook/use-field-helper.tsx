import {MixType, MMReactChangeEvent, MMReactRefObject, mmReactUseEffect, mmReactUseRef} from "mmcore";
import {InputElementType, WebFieldEngineProps} from "mmcore-ui";


interface FieldHelper<T extends InputElementType> {
    fieldRef: MMReactRefObject<T | null>
    handleChange: (event: MMReactChangeEvent<T>) => void
}

interface FieldHelperProps<T extends InputElementType> {
    name: string
    defaultValue?: MixType | Array<any>
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

    const handleChange = (event: MMReactChangeEvent<T>) => {
        engine?.setFieldValue(name, event.target.value)
        if (onChange) {
            onChange(event)
        }
    }

    return {
        fieldRef,
        handleChange
    }
}