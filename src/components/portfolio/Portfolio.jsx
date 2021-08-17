import "../portfolio/portfolio.scss";

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web App</li>
                <li>Design</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="" alt="" />
                    <h3>Tour Places</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Tour Places</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Tour Places</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Tour Places</h3>
                </div>
            </div>
        </div>
    )
}
