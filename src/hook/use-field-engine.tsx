import {
    InputElementType,
    RegisteredFieldValidated,
    WebDefaultInputFieldPropsBase,
    WebFieldEngineProps,
    WebFieldSpec,
    WebInputFieldProps
} from "mmcore-ui";
import {MixType, mmReactUseRef, mmReactUseState} from "mmcore";

export default function useFieldEngine(): WebFieldEngineProps {
    const fieldSpec = mmReactUseRef(new WebFieldSpec())
    const isInitSpec = mmReactUseRef(false);
    const refs = mmReactUseRef(new Map<string, InputElementType>())
    const nameValueStore = mmReactUseRef<Record<string, MixType>>({});
    const [version, setVersion] = mmReactUseState(0)


    const registerFields = (fields: (spec: WebFieldSpec) => WebFieldSpec): WebFieldSpec => {
        if (!isInitSpec.current) {
            isInitSpec.current = true;
            fieldSpec.current = fields(new WebFieldSpec());
        }
        return fieldSpec.current
    }

    const fieldSpecList = (): WebDefaultInputFieldPropsBase[] => {
        return fieldSpec.current.getSpecList()
    }

    const registerRefs = (name: string, element: InputElementType) => {
        refs.current.set(name, element)
    }

    const unregisterRefs = (name: string) => {
        refs.current.delete(name)
    }

    const setFieldValue = (name: string, value: MixType) => {
        nameValueStore.current[name] = value
        const element = refs.current.get(name)
        if (element) {
            element.value = String(value)
        }
        fieldSpec.current.updateDefaultValue(name, value)
    }

    const setFieldValues = (data: Record<string, MixType>) => {
        Object.entries(data).forEach(([k, v]) => {
            setFieldValue(k, v as MixType);
        });
    };

    const getFieldValues = (): Record<string, MixType> => {
        return nameValueStore.current
    }

    const validateRegisterFields = (notify?: boolean): RegisteredFieldValidated => {
        let isValid: boolean = true
        if (notify === undefined || notify === null) {
            notify = true
        }
        let fieldValues: Record<string, MixType> = getFieldValues()
        let fieldList: WebDefaultInputFieldPropsBase[] = fieldSpecList()
        if (fieldList && fieldList.length !== 0) {
            fieldList.forEach((field: WebDefaultInputFieldPropsBase) => {
                if (field.hideMe) {
                    return
                }
                let value: MixType | undefined = fieldValues[field.name]
                if (value !== undefined) {
                    field.defaultValue = value
                }

                let isError: boolean = false
                if (field.validator && !field.validator.validate(field.name, value, fieldValues, field)) {
                    isValid = false
                    isError = true
                } else {
                    if (field.required && (value === undefined || value === null || value === "")) {
                        isValid = false
                        isError = true
                    }
                }

                if (notify) {
                    field.isError = isError
                    fieldSpec.current.updateSpec(field)
                }

            });
        }

        if (notify) {
            reload()
        }

        return {
            isValid
        }
    }

    const updateInputFieldSpec = (spec: WebInputFieldProps, notify?: boolean) => {
        if (fieldSpec.current) {
            fieldSpec.current.updateSpec(spec)
            if (notify) {
                reload()
            }
        }
    }

    const getSpec = <T, >(name: string): T | undefined => {
        if (fieldSpec.current) {
            return fieldSpec.current.getSpec<T>(name)
        }
        return undefined
    }

    const reload = () => {
        setVersion(version => version + 1)
    }

    return {
        registerFields,
        fieldSpecList,
        registerRefs,
        unregisterRefs,
        setFieldValue,
        setFieldValues,
        getFieldValues,
        updateInputFieldSpec,
        reload,
        getSpec,
        validateRegisterFields,
        version
    }

}