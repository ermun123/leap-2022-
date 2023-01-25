import { useState } from 'react';
import { SlPencil, SlTrash } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'

const ListItem = ({ item, index, onEdit }) => {
  const [deleted, setDeleted] = useState(false);
  const navigate = useNavigate();
  const deleteItem = () => {
    axios.delete('https://demo-api-one.vercel.app/api/categories', { data: { id: item.id } })
      .then((res) => {
        toast.success('Deleted properly')
        setDeleted(true);
      })
      .catch((err) => {
        if (err.response.status === 403 || err.response.status === 401) {
          navigate('/signout')
        }
        toast.error(err.data.message);
      })
  };
  if (deleted) return <></>
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td style={{ whiteSpace: 'nowrap' }}>
        <button className="btn btn-sm btn-outline-primary me-2" onClick={() => onEdit(item)}>
          <SlPencil />
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={deleteItem} >
          <SlTrash />
        </button>
      </td>
    </tr>
  );
};

export default function CategoryList({ items, onEdit }) {
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th width="1">#</th>
          <th>Name</th>
          <th>Description</th>
          <th width="1">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => (
          <ListItem item={item} index={index + 1} onEdit={onEdit} key={`list-item-${index}`} />
        ))}
      </tbody>
    </table>
  );
}
