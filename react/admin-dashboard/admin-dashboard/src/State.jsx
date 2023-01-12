import { useState } from "react";
import { SlTrash, SlPlus } from "react-icons/sl"

const styles = {
    wrapper: {
        minHeight: '100vh',
        display: 'flex',
        width: 580,
        margin: '0 auto',
        justifyContent: 'center',
        maxWidth: '100%',
        alignItems: 'center',
        flexDirection: 'column'
    },
    input: {
        width: '100%',
        height: 45,
        paddingLeft: 30,
        paddingRight: 60,
        borderRadius: 50,
        boxShadow: '0 1px 6px 0 rgb(0 0 0 / 38%)',
        border: 0,
    },
    plusIcon: {
        color: 'darkcyan',
        fontSize: 20,
    },
    button: {
        padding: '12.5px 20px',
        lineHeight: '20px',
        margin: 0,
        background: 'transparent',
        boxShadow: 'none',
        border: 0,
        right: 0,
        position: 'absolute',
    },
    form: {
        position: 'relative',
        width: '100%',
        marginBottom: 40,
    },
    ul: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        width: 100,
    },
    li: {
        padding: '17px 0',
        borderBottom: '1px solid #eaeaea',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '1.2rem'
    },
    check: {
        marginRight: '15px',
    }
};

export default function State() {
    const [todos, setTodos] = useState([
        { value: 'Egg', checked: false, editing: false, },
        { value: 'Bread', checked: true, editing: false, },
        { value: 'Ham', checked: false, editing: true, }
    ]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        const newList = [...todos, { value: input, checked: false, editing: false }];
        setTodos(newList);
        setInput('');
    };
    const removeTodo = (index) => {
        setTodos(todos.filter((k, i) => i !== index));
    };
    const handleCheck = (index) => {
        const newList = todos.map((todo, i) => {
            if (i === index) {
                const newTodo = { ...todo };
                newTodo.checked = !newTodo.checked;
                return newTodo;
            }
            return todo;
        });
        setTodos(newList);
    };


    return (
        <div style={styles.wrapper}>
            <nav>
                <h1 style={styles.h1}>todo</h1>
            </nav>
            <form style={styles.form} onSubmit={(e) => {
                e.preventDefault();
                addTodo();
            }}>
                <input style={styles.input} value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit" style={styles.button}>
                    <SlPlus />
                </button>
            </form>
            <ul style={styles.ul}>
                {
                    todos.map((todo, index) => (
                        <li style={styles.li} key={`list-item-${index}`} >
                            <div>
                                <input type="checkbox" style={styles.check} checked={todo.checked} onChange={() => {
                                    handleCheck(index);
                                }} />
                                <span style={{ textDecoration: todo.checked ? 'line-through' : '' }}>{todo.value}</span>
                            </div>
                            <div onClick={() => { removeTodo(index) }}><SlTrash />
                            </div>
                        </li>

                    ))
                }

            </ul>
        </div>
    );
}

