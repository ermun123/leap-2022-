import "./styles/bootstrap.min.css"
import './styles/styles.css'
import Navbar from "./components/Navbar"
import Heading from "./Heading"
import DynamicModal from "./components/utils/DynamicModal"
import { useState } from "react"
import PostCreate from "./components/Blogs/PostCreate"
import PostList from "./components/Blogs/PostList"

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (<>
    <Navbar />
    <div className="container-sm body-container">
      <DynamicModal show={show} handleClose={handleClose} title="Create post" content={<PostCreate />} />
      <Heading title="Blog posts" handleShow={handleShow} />
      <PostList />
    </div>
  </>)

}
export default App;
