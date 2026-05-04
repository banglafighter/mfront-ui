import {InputElementType, WebDefaultInputFieldPropsBase, WebFieldEngineProps, WebFieldSpec} from "mmcore-ui";
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
    }

    const setFieldValues = (data: Record<string, MixType>) => {
        Object.entries(data).forEach(([k, v]) => {
            setFieldValue(k, v as MixType);
        });
    };

    const getFieldValues = (): Record<string, MixType> => {
        return nameValueStore.current
    }


    const updateFieldSpec = (name: string, spec: WebDefaultInputFieldPropsBase) => {
        spec.name = name
        if (fieldSpec.current) {
            fieldSpec.current.updateSpec(spec)
            reload()
        }
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
        updateFieldSpec,
        reload,
        version
    }

}