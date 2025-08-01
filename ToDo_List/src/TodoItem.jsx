export default function TodoItem({ id, title, completed, deleteFunction, toggleFunction}) {
    return <>
    <li className='list li'>
                    <label>
                        <input
                            type='checkbox'
                            id='checkbox1'
                            checked={completed}
                            onChange={e => toggleFunction(id, e.target.checked)} />{title}
                    </label>
                    <button className='btn.btn-danger' onClick={() => deleteFunction(id)}>Remove</button>
                </li>
    </>
}