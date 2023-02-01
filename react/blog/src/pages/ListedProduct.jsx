// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function ListedProduct() {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [searchResults, setSearchResults] = useState();



//     const handleSearch = event => {
//         setSearchTerm(event.target.value);
//         const results = products.filter(product =>
//             product.name.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setSearchResults(results);
//     };

//     return (
//         <div>
//             <input type="text" value={searchTerm} onChange={handleSearch} />
//             <ul>
//                 {searchResults.map(product => (
//                     <li key={product.name}>{product.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }