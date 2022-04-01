import { toggleModal } from '../store/action';
import { connect } from 'react-redux';

function Hero(props){

  function handleModal(){
    props.dispatch(toggleModal());
  }

  return (
    <div className="flex col-gap-1 mt-2 mb-2">
      <h1 className="text-lg text-dark bold">Team Members</h1>
      {
        props.currUser.email ? <button className="btn btn-hero text-light" onClick={handleModal}>Add Members +</button> : ""
      }
    </div>
  )
}

function mapStateToProps(state){
  return {
    modal: state.modalReducer,
    currUser: state.authenticationReducer
  }
}

export default connect(mapStateToProps)(Hero);