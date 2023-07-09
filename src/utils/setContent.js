import Skeleton from "../components/skeleton/Skeleton";
import Spinner from "../spinner/Spinner";
import ErrorContent from "../components/errorContent/ErrorContent";

const setContent = (process, Component, data) => {
    switch (process) {
        case 'waiting':
            return <Skeleton/>;
        case 'loading':
            return <Spinner/>;
        case 'confirmed':
            return <Component data={data}/>;
        case 'error':
            return <ErrorContent/>;
        default:
            throw new Error('Unexpected process state');
    }
}

export default setContent;