import uefimage from "./UEF.jpg";
import navisecimage from "./navisec.png"

const Timeline = () => {
    return (
        <div>
            <h1 className="educationtext">EDUCATION</h1>
            <div className="timeline">
                <div className="timelinecontainer right">
                    <div className="content">
                        <img className="uefimg" alt='uef1' src={uefimage} />
                        <h1>2023 -</h1>
                        <h2>Master of science</h2>
                        <h2>Computer science</h2>
                        <p>Estimated graduation spring 2025</p>
                    </div>
                </div>
                <div className="timelinecontainer left">
                    <div className="content">
                        <img className="uefimg" alt='navisec' src={navisecimage} />
                        <h1>2021</h1>
                        <h2>Certificate</h2>
                        <h2>Navisec flex</h2>
                        <p>Personnel information security and data protection training 2021</p>
                    </div>
                </div>
                <div className="timelinecontainer right">
                    <div className="content">
                        <img className="uefimg" alt='uef2' src={uefimage} />
                        <h1>2020 - 2023</h1>
                        <h2>Bachelor of science</h2>
                        <h2>Computer science</h2>
                        <p>With business & digital retail minors</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { Timeline };