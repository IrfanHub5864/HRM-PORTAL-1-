import React from "react";

function CompanyPoliciesPage() {

const policies = [
{
title: "Work From Office Policy",
description: "Employees are required to work from office for a minimum of 3 days per week to encourage collaboration."
},
{
title: "Leave Policy",
description: "Employees are entitled to annual leave, sick leave, and casual leave as per company guidelines."
},
{
title: "Code of Conduct",
description: "All employees must maintain professional behavior and follow ethical work standards."
},
{
title: "Employee Benefits Policy",
description: "Employees receive health insurance, performance bonuses, and career development opportunities."
}
]

return(

<div className="pageContainer">

<h1 className="pageTitle">Company Policies</h1>

<div className="policyGrid">

{policies.map((policy,index)=>(
<div key={index} className="policyCard">

<h3>{policy.title}</h3>

<p>{policy.description}</p>

</div>
))}

</div>

</div>

)

}

export default CompanyPoliciesPage;