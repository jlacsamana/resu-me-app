import PageWrapper from '../components/PageWrapper';
import '../QuickApplier.css';
import x from '../res/x.png';
import heart from '../res/heart.png';
import { func } from 'prop-types';
import React, { useState } from "react";

export function QuickApplier() {
    const [count, updateView] = useState(0);
    //get an employer profile from the queue
    //replenish queue if numbers are sufficiently low
    //TODO: replace with API call, use dummy data for now

    //for testing purposes
    const bill = {
        employer: "William Clinton",
        location: "Washinton, DC",
        postition: "Intern",
        description: "You get to work for one of the most powerful people on earth ;) Provide support for President Clinton as we goes about his day in more ways than one.",
        requirements: "Currently in university",
        pfp: "https://cdn.britannica.com/41/172741-138-647B3D53/overview-Bill-Clinton.jpg"
    }


    var employerQueue = []
    employerQueue.push(bill)



    var currentEmployerProfile = {
        employer: "William Clinton",
        location: "Washinton, DC",
        postition: "Intern",
        description: "You get to work for one of the most powerful people on earth ;) Provide support for President Clinton as we goes about his day in more ways than one.",
        requirements: "Currently in university",
        pfp: "https://cdn.britannica.com/41/172741-138-647B3D53/overview-Bill-Clinton.jpg"
    }


    function nextEmployerView() {
        updateView(currentEmployerProfile = getNextEmployer());
    }


    return (
        < PageWrapper >
            <div class="grid-container">
                <div class="item2">
                    <img
                        class="employerImg"
                        src={currentEmployerProfile.pfp}>
                    </img>
                    <div class="absButtonView">
                        <button class="buttonRound"><img src={x} onClick={() => {
                            nextEmployerView();

                        }}></img> </button>
                        <button class="buttonRound"><img src={heart} onClick={() => {


                        }}></img></button>
                    </div>
                </div>
                <div class="item3">
                    <h1 class="jobText">{currentEmployerProfile.postition}</h1>
                    <h6 class="jobText">{currentEmployerProfile.location}</h6>

                    <span></span>
                    <span></span>
                    <h4 class="jobText">Job Description</h4>
                    <p class="jobDesc">{currentEmployerProfile.description}</p>

                    <h4 class="jobText">Job Requirements:</h4>
                    <p class="jobDesc">{currentEmployerProfile.requirements}</p>

                </div>
            </div >


        </PageWrapper >

    );
}


//stub, not working yetrea
function getNextEmployer() {
    return {
        employer: "Barry Obama",
        location: "Washinton, DC",
        postition: "Drone Pilot",
        description: "My fellow Americans...",
        requirements: "Experience in politing drones",
        pfp: "https://cdn.theatlantic.com/media/mt/politics/obamasmokes.banner.jpg"
    }




}