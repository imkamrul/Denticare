import React from 'react';

import FAQ from '../FAQ/FAQ';
import Plans from '../Plans/Plans';
import PlansBanner from '../PlansBanner/PlansBanner';
import './OurPlans.css'

const OurPlans = () => {
    return (
        <div>
            <PlansBanner></PlansBanner>
            <Plans></Plans>
            <FAQ></FAQ>
        </div>
    );
};

export default OurPlans;