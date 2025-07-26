import './ResumeForm.css'
function ResumeForm({resumeData,setresumedata})
{
    function addBlock(selection,setResumeData)
    {
        let data=resumeData[section];

        let updatedArray=[...data,fields];

        setResumeData({...resumeData,[section]:updatedArray})
    }

    return(
        <div className="form-container">
            <div className="section">
                <h2 className="title">Personal Details</h2>
                <div className="input-group">
                <input type="text" placeholder="name" />
                <input type="text" placeholder="email" />
                <input type="text" placeholder="linkedIn" />
                <input type="text" placeholder="location" />
                <input type="text" placeholder="website" />
                <input type="text" placeholder="mobile" />

                </div>
                
            </div>
            <div className="section">
                <h2 className="title">Professional Summary</h2>
    <textarea>enter your summary</textarea>
</div>


        </div>

    )
}
export default ResumeForm 