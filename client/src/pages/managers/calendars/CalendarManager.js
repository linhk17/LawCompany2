import { faCalendarPlus } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Calendar, Divider } from 'antd';

import moment from 'moment';
import { useState } from 'react';
import CalendarBig from './CalendarBig';
import ModalCalendar from '../quotes/ModalCalendar';


function CalendarManager() {
    const [dateSelect, setDateSelect] = useState(moment().toDate())
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true)
    }
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Divider />
            <Row>
                <Col md={{ span: 6 }}  >
                    <button className='btn-create-calendar' onClick={showModal}>
                        <FontAwesomeIcon icon={faCalendarPlus} style={{ color: "#496ba7", marginRight: 10 }} />
                        Tạo lịch</button>
                    <Calendar className='calendar-small' fullscreen={false} onChange={(value) => setDateSelect(moment(value.$d).toDate())} />

                </Col>
                <Col md={{ span: 17, push: 1 }} className='calendar-big'>
                    <CalendarBig dateSelect={dateSelect} />
                </Col>
            </Row>
            <ModalCalendar open={isModalOpen} onOk={handleOk} onCancel={handleCancel}/> 
           
        </>

    );
}

export default CalendarManager;