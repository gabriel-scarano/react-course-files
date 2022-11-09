import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Gabriel", "Bianca", "Furriel"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Gabriel", age: 18},
        {id: 2, name: "Bianca", age: 19},
        {id: 3, name: "Furriel", age: 20},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 3);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender;