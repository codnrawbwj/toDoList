const { useRef, useEffect } = React;

const preventFirstRun = (func, deps) => {
    const firstRun = useRef(false);

    useEffect(() => {
        if (firstRun.current) func();
        else firstRun.current = true;
    }, deps)
}

export default preventFirstRun;