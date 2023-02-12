const Preview = () => {
    return (
        <div id="preview" className="mt-8">
            <div className="
            bg-blue-400 
            h-32 
            w-[100%]" id="banner">

                <h1 
                className="
                text-white 
                text-5xl 
                font-semibold 
                mx-4 
                pt-4">FirstName LastName</h1>

                <h2 className="
                text-white
                mx-5
                text-xl
                py-2
                ">Mr.</h2>
            </div>
            <div className="
            " 
            id="resume-container">
                <div className="

                " 
                id="resume-content">
                    <h3 className="
                    text-xl 
                    font-semibold 
                    text-blue-600
                    p-0
                    ml-12
                    mt-4
                    border-b
                    flex
                    flex-col
                    border-gray-300
                    ">Description</h3>
                    <p className="italic ml-12 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sed voluptate consectetur nisi, eaque quas?
                    </p>
                </div>

                <div className="
                bg-slate-300
                " 
                id="resume-contact">
                    yes
                </div>
            </div>
        </div>
        
    );
}

export default Preview;