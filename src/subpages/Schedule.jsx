import React from 'react';
import Header from '../components/Header';

const Schedule = (props) => {

    const schedule = [ [{content:'Time'}         ,{content:'2.216'},{content:'4.302'},{content:'5.302'},{content:'6.302'},{content:'5.304'}],
                       [{content:'11:00-11:30AM'},{title:'Kickoff', content:'EGaDS! and Justen Andrews'},'','','',''],
                       [{content:'11:30-12:30PM'},'',{title:'Game Audio Panel', content:'Eduardo Ortiz, Kat Wenske, & Daniel Rosenfeld Mod. Tyler Coleman'},'',{title:'Game Marketing Panel', content:'Phillip Johnson, Cricket Carlson, Gordon Walton, Chip Thurston, & Elisa Reyna'},''],
                       [{content:'12:30-1:30PM' },'','',{title:'Sound Design Workshop', content:'Alex Keller'},'',{title:'Narrative Scripting Languages',content:'Ava Pek'}],
                       [{content:'1:30-2:30PM'  },{title:'Lunch/Showcase (Atrium)'},'','','',''],
                       [{content:'2:30-3:30PM'  },{title:'Game Pitch Competition', content:'Paul Toprac'},{title:'Blender Workshop',content:' Daniel Reese & Fox Buchele'},'',{title:'"Shipping a Company" Panel',content:' Bread & Butter Game Co.'},''],
                       [{content:'3:30-4:30PM'  },{title:'Game Pitch Competition', content:'Paul Toprac'},'',{title:'Crafting Game Feel Workshop',content:'Michael Baker'},'',{title:'Level Design in Mario Maker 2',content:'Richard Terrell'}],
                       [{content:'4:30-5:30PM'  },{title:'Game Pitch Competition', content:'Paul Toprac'},{content:'Nabi Barak',title:'Qualitative Feedback in Gameplay Design'},'',{content:'Etienne Vouga',title:'"Zelda Classic" Gamemaker'},''],
                       [{content:'5:30-6:30PM'  },{title:'Collaborating Across Disciplines Panel', content:' Richard Terrell, Gordon Walton, Susan O\' Connor, & Chip Sbrogna'},'','','',''],
                       [{content:'6:30-7:00PM'  },{title:'Closing Ceremony', content:'EGaDS!'},'','','',''],
                    ];
    
    const schedule_table = <table className="schedule"><tbody>{
            schedule.map((row, idx)=>
                <tr key={idx}>{
                        row.map((item, idx2) =>
                <td key={`${idx} ${idx2}`}>
                    
                    {map_td(item)}</td>
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

function map_td(item){
    if(item.hasOwnProperty('title') && item.hasOwnProperty('content')){
        return(<div><b>{item.title}</b> <br/> {item.content}</div>)
    }
    else if(item.hasOwnProperty('title')){
        return(<div><b>{item.title}</b></div>)
    }
    else if(item.hasOwnProperty('content')){
        return(<div>{item.content}</div>)
    }
    else{
        return(<div>{item}</div>)
    }
}

export default Schedule;
