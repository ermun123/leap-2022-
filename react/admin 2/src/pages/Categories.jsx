import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CategoryCreate from '../components/Categories/CategoryCreate';
import CategoryEdit from '../components/Categories/CategoryEdit';
import CategoryList from '../components/Categories/CategoryList';
import Heading from '../components/Heading';
import DynamicModal from '../components/utils/DynamicModal';

export default function Categories() {
    const [modalShow, setModalShow] = useState(false);
    const [categories, setCategories] = useState([]);
    const [modalContent, setModalContent] = useState([]);

    useEffect(() => {
        fetch('https://demo-api-one.vercel.app/api/categories')
            .then((res) => res.json())
            .then((data) => {
                setCategories(data.body);
            })
            .catch((err) => {
                console.log(err);
                toast.error('Aldaa garlaa')
            })
    }, []);
    const afterSubmit = (category) => {
        modalClose();
        setCategories([...categories, category])
    };

    const modalClose = () => {
        setModalContent(<></>)
        setModalShow(false);
    }

    const showCreateModal = () => {
        setModalContent(<CategoryCreate afterSubmit={afterSubmit} />);
        setModalShow(true);
    };
    const afterEdit = (category) => {
        modalClose();
        let newCategories = categories.map((cat) => {
            if (cat.id === category.id) {
                return category;
            }
            return cat;
        });
        setCategories(newCategories);
    }
    const showEditModal = (category) => {
        setModalContent(<CategoryEdit category={category} afterEdit={afterEdit} />);
        setModalShow(true)
    };
    return (
        <div className="container-sm body-container">
            <Heading title="Categories" handleShow={showCreateModal} />
            <CategoryList items={categories} onEdit={showEditModal} />
            <DynamicModal content={modalContent} show={modalShow} handleClose={modalClose} title="Catogery Create" />
        </div>
    );

}
