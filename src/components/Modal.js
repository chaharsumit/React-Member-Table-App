import { connect } from "react-redux";
import { toggleModal, fillMembers, nameChange, statusChange, companyChange, notesChange, clearModalData } from "../store/action";
import { addMemberURL, membersURL } from "../utils/constant";
import { getToken } from '../utils/storage';

function Modal(props) {
  let { name, company, notes, status } = props.modal;

  function handleModal() {
    props.dispatch(toggleModal());
    props.dispatch(clearModalData());
  }

  function getAllMembers(){
    fetch(membersURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json()).then(({members}) => props.dispatch(fillMembers(members)));
  }

  function addNewMember(event) {
    event.preventDefault();
    return fetch(addMemberURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${getToken()}`
      },
      body: JSON.stringify({
        member: {
          name: name,
          company: company,
          status: status,
          notes: notes
        }
      })
    }).then(res => res.json()).then(() => {
      props.dispatch(toggleModal());
      props.dispatch(clearModalData());
      getAllMembers();
    })
  }

  function handleChange({ target }) {
    switch (target.name) {
      case "name":
        return props.dispatch(nameChange(target.value));
      case "company":
        return props.dispatch(companyChange(target.value));
      case "notes":
        return props.dispatch(notesChange(target.value));
      case "status":
        return props.dispatch(statusChange(target.value));
      default:
        break;
    }
  }

  return (
    <div className="modal flex align-center">
      <button
        className="modal-cross-btn btn bg-dark text-light"
        onClick={handleModal}
      >
        X
      </button>
      <form className="form modal-form" onSubmit={addNewMember}>
        <fieldset>
          <input
            type="text"
            name="name"
            className="form-control mb-1"
            placeholder="Enter Name"
            value={name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            className="form-control mb-1"
            placeholder="Enter Company"
            value={company}
            onChange={handleChange}
          />
          <input
            type="text"
            name="status"
            className="form-control mb-1"
            placeholder="Enter Status"
            value={status}
            onChange={handleChange}
          />
          <input
            type="text"
            name="notes"
            className="form-control mb-1"
            placeholder="Enter Notes"
            value={notes}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <input
            className="btn form-btn text-xs text-light"
            type="submit"
            value="Add Member"
          />
        </fieldset>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    modal: state.modalReducer
  };
}

export default connect(mapStateToProps)(Modal);