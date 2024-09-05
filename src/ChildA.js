import { useInput } from "./InputProvider";

function ChildA() {
    const { setData } = useInput()
    function inputChange(e) {
        setData(e.target.value);
    }

    return (
        <div>
            <input onChange={inputChange} />
        </div>
    );
}

export default ChildA;

