import {FormRow, Alert, FormRowSelect} from '../../components'
import {useAppContext} from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const AddJobs = () => {
    const {
        showAlert,
        displayAlert,
        position,
        company,
        isEditing,
        jobLocation,
        jobType,
        jobTypeOptions,
        status,
        statusOptions
    } = useAppContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!position || !company || !jobLocation) {
            displayAlert()
            return
        }
        console.log('create job')
    }

    const handleJobInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(`${name}: ${value}`)
    }
    return(
       <Wrapper>
           <form>
               <h3>{isEditing ? 'edit job' : 'add job'}</h3>
               {showAlert && <Alert />}
               <div className="form-center">
                    <FormRow type="text" name="position" value={position} onChange={handleJobInput}/>
                    <FormRow type="text" name="company" value={company} onChange={handleJobInput}/>
                    <FormRow type="text" name="jobLocation" value={jobLocation} onChange={handleJobInput}/>
                    <FormRowSelect name="status" value={status} handleChange={handleJobInput} list={statusOptions} />
                    {/* <FormRowSelect name="jobType" labelText="type" value={jobType} handleChange={handleJobInput} list={jobTypeOptions} /> */}
                    <div className="form-row">
                        <label htmlFor="jobType" className="form-label">
                            job type
                        </label>
                        <select name="jobType" value={jobType} onChange={handleJobInput} className="form-select">
                            {jobTypeOptions.map((itemValue, index) =>{
                                return (
                                    <option key={index} value={itemValue}>
                                        {itemValue}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="btn-container">
                        <button type="submit" className="btn btn-block submit-btn">
                            submit
                        </button>
                    </div>
               </div>
           </form>
       </Wrapper>
    )
}

export default AddJobs;