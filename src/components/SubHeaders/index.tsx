import React from 'react';
import './index.scss';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

function SubHeaders() {
    return (
        <div className="subHeader-wrapper">
            <div></div>
            <p className="subHeader">Next Deliveries</p>
            <div className="pill1">
                <div className="subPillIcon">
                    <QueryBuilderIcon />
                </div>
                <div className="subpill">
                    <div className="delivery-slots-info">Delivering Now In</div>
                    <div className="secondRow">13 hours</div>
                </div>
            </div>
            <div className="pill2">
                <div className="subPillIcon">
                    <QueryBuilderIcon />
                </div>
                <div className="subpill">
                    <div className="delivery-slots-info">Next Available Timeslot</div>
                    <div className="secondRow">Tom 08:00 am - 01:00 pm</div>
                </div>
            </div>


            <div className="pill3">
                <div className="subPillIcon">
                    <QueryBuilderIcon />
                </div>
                <div className="subpill">
                    <div className="delivery-slots-info">Timeslots Open</div>
                    <div className="secondRow">Tom 08:00 am - 01:00 pm</div>
                </div>
            </div>
            <div className="pill4">
                <div className="subPillIcon">
                    <QueryBuilderIcon />
                </div>
                <div className="subpill">
                    <div className="delivery-slots-info">Timeslots Open</div>
                    <div className="secondRow">Tom 08:00 am - 01:00 pm</div>

                </div>
            </div>
        </div>
    )
}

export default SubHeaders
