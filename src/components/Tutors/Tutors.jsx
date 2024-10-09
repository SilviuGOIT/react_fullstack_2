import { Component } from "react";
import styles from "./Tutors.module.css";
import PropTypes from "prop-types";
import AddTutor from "./AddTutor/AddTutor";
import Icon from "../common/Icon/Icon";

class Tutors extends Component {
  state = {
    isAddFormVisible: false,
    list: [
      {
        id: 0,
        firstName: "Antonio",
        lastName: "García",
        phone: "+34 456 890 302",
        email: "antonio.garcia@goit.global",
        city: "Madrid",
        options: "Group creation, editing teacher profiles",
      },
    ],
  };
  renderList = (items) => {
    return items.map((el) => {
      return (
        <div key={el.id} className={styles.tutorsListItem}>
          <div>{el.firstName}</div>
          <div>{el.lastName}</div>
          <div className={styles.tutorsListContainer}>
            <span>{el.email}</span>
            <span>{el.phone}</span>
            <span>{el.city}</span>
          </div>
        </div>
      );
    });
  };

  handleTutor = (data) => {
    const newId = this.state.list.length > 0 ? this.state.list.length : 0;

    const tutorToAdd = {
      id: newId,
      firstName: data.surname,
      lastName: data.name,
      email: data.email,
      phone: data.phone,
      city: data.city,
    };

    this.setState((prevState) => {
      return {
        list: [...prevState.list, tutorToAdd],
        isAddFormVisible: false,
      };
    });
  };

  render() {
    const { isAddFormVisible, list } = this.state;
    return (
      <section className="section">
        <div>
          <Icon variant="cat" label="cat" />
          <h1>Tutors</h1>
        </div>
        <div className={styles.tutorsList}>{this.renderList(list)}</div>
        {isAddFormVisible && <AddTutor onFormSubmit={this.handleTutor} />}
        <button onClick={() => this.setState({ isAddFormVisible: true })}>
          Add Tutor
        </button>
      </section>
    );
  }
}

Tutors.propTypes = {
  list: PropTypes.array,
};

export default Tutors;
