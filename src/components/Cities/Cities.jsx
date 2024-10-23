import AddCitiesForm from "./AddCitiesForm";
import Icon from "../common/Icon/Icon";
import Button from "../common/Button/Button";
import { useState } from "react";
import ErrorAlert from "../common/ErrorAlert/ErrorAlert";

const Cities = () => {
    const [isAddFormVisible, setIsAddFormVisible] = useState(false)
    const [list, setList] = useState([])
    const [error, setError] = useState('')

   const renderList = (list) => {
        if (!list || list.length === 0) {
            return (
                <div>There are no cities addes</div>
            )
        }

        return list.map(item => (
            <div key={item.id}>
                <span>{item.name}</span>
            </div>
        ))
    }

   const handleAddItem = (item) => {
        const sortedList = list.sort((a, b) => a.id > b.id)

        if (sortedList.find( el => el.name === item.name)) {
            setError('Un oras cu denumirea asta exista deja')

            return;
        }

        const newId = sortedList.length > 0 ? sortedList.length + 1 : 0

        const itemToAdd = {
            id: newId,
            name: item.name
        }

        setList( prevState => {
            return [...prevState, itemToAdd]
        })
        setIsAddFormVisible(false)
    }


    return (
        <div>
            <h2>
                <Icon variant='pin' label='cities' />
                <span>Cities</span>
            </h2>
            <div>{renderList(list)}</div>
            {isAddFormVisible && <AddCitiesForm onFormSubmit={handleAddItem} />}
            {error.length > 0 && <ErrorAlert errors={error}/>}
            <Button action={() => {
                setIsAddFormVisible(true)
            }}>Add City</Button>
        </div>
    )  
}

export default Cities;