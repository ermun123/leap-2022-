import womanProfile from "../images/womanProfile.svg"
export default function Main() {
    return (
        <div className="container d-flex">
            <div className="left bg-warning">
                <div className="header d-flex justify-content-between">
                    <img src={womanProfile} alt="" />
                    <ul className="list-unstyled name mx-2">
                        <li>Firstname Lastname</li>
                        <li>M/D/Y · <span>Released date</span></li>
                    </ul>

                </div>


            </div>
            <div className="right bg-primary"></div>
        </div>
    )
}