import { faBed, faCalendarDay, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";

const Header = () => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOption, setOption] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })

    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rental</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attraction</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxies</span>
                    </div>
                </div>
                <h1 className="headerTitle">A life time of discount? It's Genius</h1>
                <p className="headerDesc">Get rewarder for your travels - unlock instant 10% or more with a free Reservation.com account</p>
                <button className="headerBtn">Sign in / Register</button>
                {/* headerSearchItem */}
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder="Where are You going?" className="headerSearchInput" />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
                        <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yy")} to ${format(date[0].endDate, "MM/dd/yy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span className="headerSearchText">{`${options.adult} adult · ${options.children} · ${options.room}`}</span>
                        <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton">-</button>
                                    <span className="optionCounterNumber">1</span>
                                    <button className="optionCounterButton">+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton">-</button>
                                    <span className="optionCounterNumber">0</span>
                                    <button className="optionCounterButton">+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton">-</button>
                                    <span className="optionCounterNumber">1</span>
                                    <button className="optionCounterButton">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn">Search</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header