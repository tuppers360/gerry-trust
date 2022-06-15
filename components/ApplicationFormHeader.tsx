import React from 'react';

function ApplicationFormHeader() {
  return (
    <>
      <h3 className="font-bold tracking-tight text-slate-700 dark:text-slate-300 text">
        Please note the following when applying for a grant:
      </h3>
      <ul className="p-4 pl-8 mt-4 list-disc">
        <li>All form fields are required.</li>
        <li>
          Your application must meet our criteria - live within 15 miles of
          Blackpool Tower and be under the age of 25
        </li>
        <li>
          If your application is successful, you will be sent an email as soon
          as possible after the meeting which will include terms and conditions
          for your acceptance.
        </li>
        <li>
          If further information becomes available after you have submitted your
          application but prior to the Trust meeting, eg receiving the result of
          your funding application or needing to change details on this
          application, you will need to contact us to let us know about this
          change.
        </li>
        <li>
          Trustees do not enter into any communication about rejected
          applications nor is there an appeals process.
        </li>
        <li>
          Once you submit your application, you will recieve acknowledgement via
          email within a few min confirming receipt of your application. Should
          we require further information we will contact you by email.
        </li>
      </ul>
    </>
  );
}

export default ApplicationFormHeader;
