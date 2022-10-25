import { FormRow, FormRowSelect } from '.'
import { useAppContext } from '../context/appContext'
import Wrapper from  '../assets/wrappers/SearchContainer'

const SearchContainer = () => {
  const { 
    isLoading, 
    search, 
    searchStatus, 
    searchType, 
    sort, 
    sortOptions, 
    statusOptions, 
    jobTypeOptions, 
    handleChange, 
    clearFilters 
  } = useAppContext()

  const handleSearch =(e) =>{
    if(isLoading) return 
    handleChange({name:e.target.name, value:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    clearFilters()
  }

  return (
    <Wrapper>
      <form className="form">
        <h4>Search Form</h4>
        {/* Search position */}
        <div className="form-center">
        <FormRow 
          type='text'
          name='search' 
          value={search} 
          handleChange={handleSearch}
        />

        {/* Search Status */}
        <FormRowSelect 
          name='searchStatus'
          value={searchStatus}
          handleChange={handleSearch} 
          labelText='Job Status' 
          list={['all',...statusOptions]}
        />

        {/* Search Job Type */}
        <FormRowSelect 
          name='searchType'
          value={searchType}
          handleChange={handleSearch} 
          labelText='Job Type' 
          list={['all',...jobTypeOptions]}
        />

        {/* Sort */}
        <FormRowSelect 
          name='sort'
          value={sort}
          handleChange={handleSearch} 
          labelText='Sort By' 
          list={[...sortOptions]}
        />

        <button 
        onClick={handleSubmit} 
        disabled={isLoading}
        className='btn btn-block btn-danger'>
          Clear Filter
        </button>

        </div>
      </form>
    </Wrapper>
  )
}
export default SearchContainer