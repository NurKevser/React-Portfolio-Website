import "../works/works.scss";

export default function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.png" alt="" />
                                </div>
                                <h2>Title</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, aut error vel corporis quidem.
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://cdn.pixabay.com/photo/2021/08/08/15/45/mountains-6531264_1280.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" />
            <img src="assets/arrow.png" className="arrow right" alt="" />
        </div>
    )
}
