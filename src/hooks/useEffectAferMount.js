import { useRef, useEffect } from "react";

const useEffectAfterMount = (cb, dependencies) => {
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        return cb();
    }, dependencies);
};

export default useEffectAfterMount;
