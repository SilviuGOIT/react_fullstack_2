import styles from "./Tutors.module.css";
import Button from "../../../common/components/Button/Button";
import AddTutor from "./AddTutor/AddTutor";
import Icon from "../../../common/components/Icon/Icon";
import { useEffect, useRef, useState } from "react";
import { fetchTutors, addTutor } from "../../../../redux/slices/tutorsSlice";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../../common/components/SearchBar/SearchBar";
import {
  selectErrorTutors,
  selectFilteredTutors,
  selectStatusTutors,
  selectTutors,
  selectTutorsFilter,
} from "../../../../redux/selectors";
import { setFilter } from "../../../../redux/slices/tutorsFilterSlice";

const Tutors = () => {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const filteredList = useSelector(selectFilteredTutors);
  const searchTerm = useSelector(selectTutorsFilter);
  const error = useSelector(selectErrorTutors);
  const tutorsStatus = useSelector(selectStatusTutors);
  console.log(tutorsStatus);
  const dispatch = useDispatch();

  const test = useRef(null);

  // GET
  useEffect(() => {
    if (tutorsStatus === "idle") {
      dispatch(fetchTutors());
    }
  }, [tutorsStatus, dispatch]);

  const renderList = (items) => {
    if (!items || !Array.isArray(items)) {
      return <>Loading...</>;
    }

    if (items.length === 0) {
      return <div>There are no tutors.</div>;
    }

    return items.map((el) => {
      const name = `${el.firstName} ${el.lastName}`;

      return (
        <div key={el.id} className={styles.tutorsListItem}>
          <div>{name}</div>
          <div className={styles.address}>
            <span>{el.email}</span>
            <span>{el.telephone}</span>
            <span>{el.city}</span>
          </div>
          <div>{el.role}</div>
        </div>
      );
    });
  };

  const handleTutor = (data) => {
    const newId = filteredList.length > 0 ? filteredList.length : 0;

    const tutorToAdd = {
      id: newId,
      firstName: data.name,
      lastName: data.surname,
      telephone: data.phone,
      email: data.email,
      city: data.city,
      role: "Member",
    };

    /**
     * Pentru orice state care este un obiect sau array si avem nevoie de starea precedenta, folosim metoda de mai jos
     */

    setIsAddFormVisible(false);
  };

  return (
    <section ref={test} className="section">
      <h1>
        <Icon variant="cat" label="cat" />
        <span>Tutors</span>
      </h1>
      <div className={`box ${styles.tutorsList}`}>
        {renderList(filteredList)}
      </div>
      {isAddFormVisible && <AddTutor onFormSubmit={handleTutor} />}
      <Button action={() => setIsAddFormVisible(true)}>Add Tutor</Button>
      <SearchBar
        handleChange={(evt) => {
          dispatch(setFilter(evt.target.value));
        }}
        placeholder="Search for tutor..."
        searchTerm={searchTerm}
      />
    </section>
  );
};

export default Tutors;
