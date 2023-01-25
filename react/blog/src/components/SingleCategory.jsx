import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "./Card";

export default function SingleCategory() {
    const [singleCategory, setSingleCategory] = useState([])
    const { id } = useParams();
    console.log(id)
    useEffect(() => {

        axios.get(`http://localhost:8000/category/${id}`).then((res) => {
            console.log(res.data)
            setSingleCategory(res.data);
        })
    }, [id]);
    return (
        <main>
            <div className="container">
                <div className="row">
                    {singleCategory.map((articles, index) => (
                        <div key={index} className="col-md-3 col-sm-6 col-12">
                            <Link to={`/articles/${articles.id}`}>
                                <Card title={articles.name} image={articles.imageUrl} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
