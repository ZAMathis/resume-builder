const Editor = () => {
    return (
        <div id="editor" className="bg-slate-100">
            <section 
            id="editor-personal" 
            className="editor-section
            flex 
            flex-col
            gap-2 ">
                <h2>Personal information:</h2>
                    <input 
                    type="text" 
                    placeholder="First Name" 
                    className="editor-input" />

                    <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="editor-input" />

                    <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="editor-input" />

                    <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="editor-input" />

                    <input 
                    type="text" 
                    placeholder="Address" 
                    className="editor-input" />

                    <textarea name="descripton" 
                    id=""
                    placeholder="Description"
                    className="
                    editor-input 
                    resize-none
                    h-24 "></textarea>
            </section>
            
            <section 
            id="editor-personal" 
            className="editor-section
            flex 
            flex-col
            gap-2 ">
                <h2>Work Experience:</h2>
                    <input 
                    type="text" 
                    placeholder="Company" 
                    className="editor-input" />

                    <input 
                    type="text" 
                    placeholder="Position" 
                    className="editor-input" />

                    <input 
                    type="text" 
                    placeholder="City" 
                    className="editor-input" />

                    <input 
                    type="text" 
                    placeholder="From" 
                    className="editor-input" />

                    <input 
                    type="text" 
                    placeholder="To" 
                    className="editor-input" />

                    <button className="editor-button mt-5">
                        Add
                    </button>
                    <button className="editor-button mt-2">
                        Delete
                    </button>
            </section>

            <section 
            id="editor-personal" 
            className="editor-section
            flex 
            flex-col
            gap-2 ">
                <h2>Educational Experience:</h2>
                    <input 
                    type="text" 
                    placeholder="School Name" 
                    className="editor-input" />

                    <input 
                    type="text" 
                    placeholder="Degree" 
                    className="editor-input" />

                    <input 
                    type="text" 
                    placeholder="Subject" 
                    className="editor-input" />

                    <input 
                    type="text" 
                    placeholder="City" 
                    className="editor-input" />

                    <input 
                    type="text" 
                    placeholder="From" 
                    className="editor-input" />

                    <input 
                    type="text" 
                    placeholder="To" 
                    className="editor-input" />

                    <button className="editor-button mt-5">
                        Add
                    </button>
                    <button className="editor-button mt-2">
                        Delete
                    </button>
            </section>

            <section
            className="
            editor-section
            flex
            flex-col
            ">
                <button id="editor-section-submit" className="editor-button mt-6">
                    Submit
                </button>

                <button id="editor-section-reset" className="editor-button mt-4">
                    Reset
                </button>
            </section>
        </div>
    )
}

export default Editor