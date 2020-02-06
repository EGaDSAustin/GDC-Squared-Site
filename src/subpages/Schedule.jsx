import React from 'react';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Schedule = (props) => {

    const schedule = [ ['','Atrium'  ,'2.216','4.302','5.302','6.302'],
                       ['9:30-10:30AM' ,'','Event','Event','','Event'],
                       ['10:00-10:50AM','Event','','Event','','Event'],
                       ['11:00-11:50AM','','','Event','','Event'],
                       ['12:00-1:30PM' ,'','','','Event',''],
                       ['1:30-2:20PM'  ,'Event','','Event','',''],
                       ['2:30-3:20PM'  ,'','','','','Event'],
                       ['3:30-4:20PM'  ,'','','','','Event'],
                       ['3:30-4:20PM'  ,'Event','','Event','',''],
                    ];
    
    const schedule_table = <table className="schedule"><tbody>{
            schedule.map((row, idx)=>
                <tr key={idx}>{
                        row.map((item, idx2) =>
                            <td key={`${idx} ${idx2}`}>{item}</td>
                        )
                    }
                </tr>
            )
        }</tbody></table>
    

    return (
        <div id='schedule'>
            <Container fluid='true'>
                <Row>
                    <Col>
                        <Header>
                            <span style={{
                                backgroundColor: 'rgba(221,85,85,0.5)',
                                padding: '10px 400px',
                            }}>
                            Schedule
                            </span>
                        </Header>
                    </Col>
                </Row>
            </Container>
            {schedule_table}
        </div>
    );
}

export default Schedule;