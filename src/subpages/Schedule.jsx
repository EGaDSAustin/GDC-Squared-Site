import React from 'react';
import Header from '../components/Header';

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
    var i = 0; //what is this used for?
    var schedule_table = <table class="schedule">{
            schedule.map((row)=>
                <tr>{
                        row.map((item) =>
                            <td>{item}</td>
                        )
                    }
                </tr>
            )
        }</table>
    

    return (
        <div id='schedule'>
            <Header primary>Schedule</Header>
            {schedule_table}
        </div>
    );
}

export default Schedule;