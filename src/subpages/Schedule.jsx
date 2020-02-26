import React from 'react';
import Header from '../components/Header';

const Schedule = (props) => {

    const schedule = [ ['Time'         ,'2.216','4.302','5.302','6.302','5.304'],
                       ['11:00-11:30AM','Kickoff','','','',''],
                       ['11:30-12:30PM','','Eduardo Ortiz, Kat Wenske, & Daniel Rosenfeld Mod. Tyler Coleman: Game Audio Panel','','Phillip Johnson, Cricket Carlson, Chip Thurston & Elisa Reyna: Game Marketing Panel',''],
                       ['12:30-1:30PM' ,'','','Alex Keller: Sound Design Workshop','','Ava Pek: Narrative Scripting Languages'],
                       ['1:30-2:30PM'  ,'Lunch/Showcase (Atrium)','','','',''],
                       ['2:30-3:30PM'  ,'Game Pitch Competition','Daniel Reese & Fox Buchele: Blender Workshop','','Bread & Butter Game Co.: "Shipping a Company" Panel',''],
                       ['3:30-4:30PM'  ,'Game Pitch Competition','','Michael Baker: Crafting Game Feel Workshop','','Richard Terrell: Level Design in Mario Maker 2'],
                       ['4:30-5:30PM'  ,'Game Pitch Competition','Nabi Barak: Qualitative Feedback in Gameplay Design','','Etienne Vouga: "Zelda Classic" Gamemaker',''],
                       ['5:30-6:30PM'  ,'Richard Terrell, Gordon Walton, Susan O\' Connor & Chip Sbrogna: Collaborating Across Disciplines','','','',''],
                       ['6:30-7:00PM'  ,'Closing Ceremony','','','',''],
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
            <Header>
                <span style={{
                    backgroundColor: '#60666C',
                    padding: '1vw 12vw',
                    borderRadius: '8px'
                }}>
                    Schedule
                </span>
            </Header>
            {schedule_table}
        </div>
    );
}

export default Schedule;
