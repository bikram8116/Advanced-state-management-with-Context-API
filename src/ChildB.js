import { useInput } from "./InputProvider";

function ChildB() {
    const { datas } = useInput();
    return (
        <>
            <h3>{datas}</h3>
        </>
    );
}

export default ChildB;
