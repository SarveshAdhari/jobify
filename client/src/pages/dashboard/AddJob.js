import { FormRow, Alert, FormRowSelect } from '../../components/index'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const AddJob = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext()

  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({name,value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!company || !position || !jobLocation) {
      displayAlert()
      return
    }

    if(isEditing){
      editJob()
      return
    }
    createJob()
  }

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'Edit Job' : 'Add Job'}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* position */}
          <FormRow
            type='text'
            labelText='Position'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type='text'
            labelText='Company'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          {/* jobLocation */}
          <FormRow
            type='text'
            labelText='Job Location'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* jobType */}
          <FormRowSelect
          name='jobType'
          labelText='Job Type' 
          value={jobType} 
          handleChange={handleJobInput}
          list={jobTypeOptions}
          />
          {/* jobStatus */}
          <FormRowSelect
          name='status'
          labelText='Job Status' 
          value={status} 
          handleChange={handleJobInput}
          list={statusOptions}
          />

          <div className="btn-container">
            <button 
            type='submit' 
            className="btn btn-block submit-btn" 
            onClick={handleSubmit}
            disabled={isLoading}
            >
              Submit
            </button>
            <button 
            type="button" 
            className="btn btn-block clear-btn"
            onClick = {(e)=>{
              e.preventDefault()
              clearValues()
            }}>
              Clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}
export default AddJob