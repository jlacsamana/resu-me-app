import PageWrapper from '../components/PageWrapper';
import '../QuickApplier.css';
import x from '../res/x.png';
import heart from '../res/heart.png';
import { func } from 'prop-types';
import React, { useState } from "react";
import { default_employer, employerList } from '../res/testing';

export function QuickApplier() {
    const [currentEmployerProfile, updateView] = useState(0);
    const [count, updateCounter] = useState(0);

    //get an employer profile from the queue
    //replenish queue if numbers are sufficiently low
    //TODO: replace with API call, use dummy data for now

    //stub, not working yet, change to make database calls
    function getNextEmployer() {
        return employerList[count];

    }

    function nextEmployerView() {
        updateView(function (currentEmployerProfile) {
            if (currentEmployerProfile == 0) {
                return (currentEmployerProfile = default_employer);
            } else {
                return (currentEmployerProfile = getNextEmployer());

            }
        });
    }

    function incrementCounter() {
        updateCounter(function (count) {
            return (count += 1);
        });
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
                            incrementCounter();
                        }}></img> </button>
                        <button class="buttonRound"><img src={heart} onClick={() => {
                            // before going onto next employer, create popup view, prompting resume select, and submission


                            // next employer after popup is dismissed
                            nextEmployerView();
                            incrementCounter();
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

