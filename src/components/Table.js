import { connect } from "react-redux";
import { ROOT_URL } from '../utils/constant';
import { getToken } from '../utils/storage';
import { useEffect } from 'react';
import { fillMembers } from '../store/action';
import { membersURL } from '../utils/constant';

function Table(props) {
  let { members } = props.members;

  useEffect(() => {
    getAllMembers();
  }, []);
  
  function getAllMembers(){
    fetch(membersURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json()).then(({members}) => props.dispatch(fillMembers(members)));
  }

  function deleteMember({ target }){

    let deleteURL = ROOT_URL + target.parentElement.id + '/delete';
    fetch(deleteURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${getToken()}`
      },
    }).then((res) => res.json()).then(() => getAllMembers());
  }

  return (
    <table className="table">
      <thead>
        <tr className="bg-grey text-align-left">
          <th></th>
          <th>Name</th>
          <th>Company</th>
          <th>Status</th>
          <th>Last Updated</th>
          <th>Notes</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {members.map(member => (
          <tr className="bg-light text-align-left" key={member.id} id={member.id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{member.name}</td>
            <td>{member.company}</td>
            <td>{member.status}</td>
            <td>{member.lastUpdated}</td>
            <td>{member.notes}</td>
            <td onClick={deleteMember}>🗑</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function mapStateToProps(state) {
  return {
    members: state.memberReducer,
  };
}

export default connect(mapStateToProps)(Table);

/*

<tr className="bg-light text-align-left">
          <td>
            <input type="checkbox" />
          </td>
          <td>$100</td>
          <td>January</td>
          <td>$100</td>
          <td>January</td>
          <td>$100</td>
          <td>🗑</td>
          <td>$100</td>
        </tr>
        <tr className="bg-grey">
          <td>
            <input type="checkbox" />
          </td>
          <td>$100</td>
          <td>January</td>
          <td>$100</td>
          <td>January</td>
          <td>$100</td>
          <td>🗑</td>
          <td>$100</td>
        </tr>
        <tr className="bg-light text-align-left">
          <td>
            <input type="checkbox" />
          </td>
          <td>$100</td>
          <td>January</td>
          <td>$100</td>
          <td>January</td>
          <td>$100</td>
          <td>🗑</td>
          <td>$100</td>
        </tr>

*/
