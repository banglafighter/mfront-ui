import {
    FieldValueType,
    InputElementType,
    RegisteredFieldValidated,
    WebDefaultInputFieldPropsBase,
    WebFieldEngineProps,
    WebFieldSpec,
    WebInputFieldProps
} from "mmcore-ui";
import {MixType, mmReactUseRef, mmReactUseState} from "mmcore";

export default function useFieldEngine(): WebFieldEngineProps {
    const fieldSpec = mmReactUseRef<WebFieldSpec>(new WebFieldSpec())
    const isInitSpec = mmReactUseRef<boolean>(false);
    const refs = mmReactUseRef(new Map<string, InputElementType>())
    const nameValueStore = mmReactUseRef<Record<string, FieldValueType>>({});
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

    const setFieldValue = (name: string, value: FieldValueType) => {
        nameValueStore.current[name] = value
        const element = refs.current.get(name)
        if (element) {
            element.value = String(value)
        }
        fieldSpec.current.updateDefaultValue(name, value)
    }

    const setFieldValues = (data: Record<string, FieldValueType>) => {
        Object.entries(data).forEach(([k, v]) => {
            setFieldValue(k, v as FieldValueType);
        });
    };

    const getFieldValues = (): Record<string, FieldValueType> => {
        return nameValueStore.current
    }

    const validateRegisterFields = (notify?: boolean): RegisteredFieldValidated => {
        let isValid: boolean = true
        if (notify === undefined || notify === null) {
            notify = true
        }
        let fieldValues: Record<string, FieldValueType> = getFieldValues()
        let fieldList: WebDefaultInputFieldPropsBase[] = fieldSpecList()
        if (fieldList && fieldList.length !== 0) {
            fieldList.forEach((field: WebDefaultInputFieldPropsBase) => {
                if (field.isHidden) {
                    return
                }
                let value: FieldValueType | undefined = fieldValues[field.name]
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

    const setFieldErrors = (errors: Record<string, string>, notify: boolean = true) => {
        Object.entries(errors).forEach(([field, message]) => {
            let inputFieldProps: WebDefaultInputFieldPropsBase | undefined = getSpec<WebDefaultInputFieldPropsBase>(field)
            if (inputFieldProps && fieldSpec.current) {
                inputFieldProps.errorText = message
                inputFieldProps.isError = true
                fieldSpec.current.updateSpec(inputFieldProps)
            }
        })
        if (notify) {
            reload()
        }
    }

    const setSelectOptions = (name: string, options: Record<string, MixType>[], notify: boolean = true) => {
        if (fieldSpec.current) {
            fieldSpec.current.setSelectOptions(name, options)
        }
        if (notify) {
            reload()
        }
    }

    const setSelectOptionsByOptionKey = (keyValues: Record<string, Record<string, MixType>[]>, notify: boolean = true) => {
        if (fieldSpec.current) {
            fieldSpec.current.setSelectOptionsByOptionKey(keyValues)
        }
        if (notify) {
            reload()
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
        setFieldErrors,
        validateRegisterFields,
        version,
        setSelectOptions,
        setSelectOptionsByOptionKey
    }

}