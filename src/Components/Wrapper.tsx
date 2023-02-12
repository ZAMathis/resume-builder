import Editor from "./Editor";
import Preview from "./Preview";

const Wrapper = () => {
    return (
        <div className="
        w-[375px]
        sm:w-[70vw]
        mx-auto
        my-12">
            <Editor />
            <Preview />
        </div>
    )
}

export default Wrapper;