import { useEffect, useRef } from 'react'

export function useUpdateEffect(
    effect: VoidFunction,
    dependencies: Array<unknown> = []
) {
    const isInitialMount = useRef(true)

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false
        } else {
            return effect()
        }
    }, dependencies)
}
