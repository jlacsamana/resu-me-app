import React, {useState} from 'react';
import Resumes from '../res/resumes.json';

// POPUP
const ResumePopup= (props) => {
    const Popup = {
        position:'fixed',
        top:0,
        left:0,
        width: '100%',
        height: '100vh',

        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }

    const PopupInner = {
        position: 'relative',
        padding: '32px',
        width: '100%',
        maxWidth: '880px',
        height: '76vh',
        backgroundColor:'#FFF'
    }

    const Browser = {
        display:'inline-block',
        whiteSpace:'normal',
        textAlign: 'left'
    }
    
    const CardStyle = {

        background:'transparent',
        width:200,
        height:230,
        margin:10,
        wordBreak: 'break-all',
        borderRadius:10
     }


     const Container = {
         padding: '2px 16px'
     }



    const [query, setQuery] = useState('');

    console.log(Resumes.filter(resume => resume.companyName.toLowerCase().includes))


    return (props.trigger) ? (
        <div style={Popup}>
            <div style={PopupInner}>
                <div>
                    <h3>Resumes</h3>
                </div>

                <div>
                    <form>
                        <input type="text" placeholder='search...' onChange={e=> setQuery(e.target.value)} />
                        <button onClick={(e) => {e.preventDefault()}}>Search</button>
                    </form>
                </div>
                
                <div style={Browser}>
                    {
                        Resumes.filter(resume=>resume.companyName.toLowerCase().includes(query)).map(resume => (
                            <button style={CardStyle} key={resume.id} onClick={() => {props.setTrigger(false)}}>
                                <img src={resume.image}></img>
                                <div style={Container}>
                                    <h4><b>{resume.companyName}</b></h4>
                                    <p>{resume.status}</p>
                                </div>
                            </button>
                        ))
                    }   
                </div>
            </div>
        </div>
    ) : "";
}


// <ui key={resume.id} style={Cringe}>{resume.status} {resume.companyName}</ui>
// <ResumeCard status={resume.status} img={resume.img} companyName={resume.companyName}/>
export default ResumePopup