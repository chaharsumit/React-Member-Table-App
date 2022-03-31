import { connect } from 'react-redux';
import { filterCompany, removeFromCompanyFilter, removeFromStatusFilter, filterStatus, toggleCompany, toggleStatus } from '../store/action';

function Filter(props){
  let { members } = props.members;
  let { companyDropdownIsOpen, statusDropdownIsOpen, companyFilter, statusFilter} = props.filter;

  function handleCompanyFilter(event, companies){
    if(companyFilter.length === companies.length && event.target.id === 'selectAll'){
      return props.dispatch(removeFromCompanyFilter(event.target.id));
    }
    if(companyFilter.includes(event.target.id)){
      return props.dispatch(removeFromCompanyFilter(event.target.id));
    }else{
      return props.dispatch(filterCompany(event.target.id, companies));
    }
  }

  function handleStatusFilter(event){
    if(statusFilter === event.target.id){
      return props.dispatch(removeFromStatusFilter(event.target.id));
    }else{
      return props.dispatch(filterStatus(event.target.id));
    }
  }

  function toggleCompanyDropdown(){
    props.dispatch(toggleCompany());
  }

  function toggleStatusDropdown(){
    props.dispatch(toggleStatus());
  }

  return (
    <div className="flex col-gap-2 mt-2 mb-2">
      <button className="btn btn-filter bg-light flex align-center" onClick={toggleCompanyDropdown}>
        Company({companyFilter.length}) ˅
      </button>
      <ul className='dropdown'>
        { members.length && companyDropdownIsOpen ? <CompanyDropdown members={members} companyFilterArr={companyFilter} filter={handleCompanyFilter} /> : "" }
      </ul>
      <button className="btn btn-filter bg-light flex align-center" onClick={toggleStatusDropdown}>
        Status ˅
      </button>
      <ul className='dropdown'>
        { members.length && statusDropdownIsOpen ? <StatusDropdown members={members} statusFilter={statusFilter} filter={handleStatusFilter} /> : "" }
      </ul>
    </div>
  )
}

function CompanyDropdown(props){

  let companies = props.members.reduce((acc, curr) => {
    if(!acc.includes(curr.company)){
      acc.push(curr.company);
    }
    return acc;
  }, []);

  return (
    <>
      <li id='selectAll' key='selectAll' onClick={(event) => props.filter(event,companies)}>
        <input type="checkbox" checked={props.companyFilterArr.length === companies.length ? true : false} />
        Select All
      </li>
      {companies.map(company => (
        <li key={company} id={company} onClick={(event) => props.filter(event, companies)}>
            {
              props.companyFilterArr.includes(company) ? <input type="checkbox" id={company} checked /> : <input type="checkbox" id={company} />
            }
            {company}
        </li>
      ))}
    </>
  )
}

function StatusDropdown(props){

  let status = props.members.reduce((acc, curr) => {
    if(!acc.includes(curr.status)){
      acc.push(curr.status);
    }
      return acc;
  }, []);

  return (
    status.map(status => (
      <li key={status} id={status} onClick={(event) => props.filter(event)}>
        <input type="checkbox" id={status} checked={props.statusFilter === status ? true : false } />
        {status}
      </li>
    ))
  )
}

function mapStateToProps(state){
  return {
    members: state.memberReducer,
    filter: state.filterReducer
  }
}

export default connect(mapStateToProps)(Filter);