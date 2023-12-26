function logalert(){
    alert("Please Login to apply")
}





// 1 python

function applyJob() {
    const jobDetails = {
        title: document.getElementById('jobTitle').innerText,
        company: document.getElementById('company').innerText,
        exp: document.getElementById('exp').innerText,
        sal: document.getElementById('sal').innerText,
        location: document.getElementById('location').innerText
    };

    // Retrieve existing applied jobs from localStorage
    const existingAppliedJob = JSON.parse(localStorage.getItem('appliedJob')) || [];

    const isJobAlreadyApplied = existingAppliedJob.some(existingJob => (
  existingJob.title === jobDetails.title &&
  existingJob.company === jobDetails.company 
  
));

if (!isJobAlreadyApplied) {
  // Add the new job details to the applied jobs
  existingAppliedJob.push(jobDetails);


    // Add the new job details to the applied jobs
    existingAppliedJob.push(jobDetails);

    // Save the updated applied jobs back to localStorage
    localStorage.setItem('appliedJob', JSON.stringify(existingAppliedJob));

    // Alert the user that the job has been applied (you can customize this part)
    alert('Job Applied Successfully!');
  } else {
  // Alert the user that the job has already been applied
  alert('You have already applied for this job.');
}
}


// 2 java


           function applyJob1() {
                const jobDetails = {
                    title: document.getElementById('jobTitle1').innerText,
                    company: document.getElementById('company1').innerText,
                    exp: document.getElementById('exp').innerText,
                    sal: document.getElementById('sal').innerText,
                    location: document.getElementById('location1').innerText
                };
    
                // Retrieve existing applied jobs from localStorage
                const existingAppliedJob = JSON.parse(localStorage.getItem('appliedJob')) || [];

                const isJobAlreadyApplied = existingAppliedJob.some(existingJob => (
              existingJob.title === jobDetails.title &&
              existingJob.company === jobDetails.company 
              
          ));

          if (!isJobAlreadyApplied) {
              // Add the new job details to the applied jobs
              existingAppliedJob.push(jobDetails);

    
                // Add the new job details to the applied jobs
                existingAppliedJob.push(jobDetails);
    
                // Save the updated applied jobs back to localStorage
                localStorage.setItem('appliedJob', JSON.stringify(existingAppliedJob));
    
                // Alert the user that the job has been applied (you can customize this part)
                alert('Job Applied Successfully!');
              } else {
              // Alert the user that the job has already been applied
              alert('You have already applied for this job.');
          }
        }


// 3 embeded


           function applyJob2() {
                const jobDetails = {
                    title: document.getElementById('jobTitle2').innerText,
                    company: document.getElementById('company2').innerText,
                    exp: document.getElementById('exp').innerText,
                    sal: document.getElementById('sal').innerText,
                    location: document.getElementById('location2').innerText
                };
    
                // Retrieve existing applied jobs from localStorage
                const existingAppliedJob = JSON.parse(localStorage.getItem('appliedJob')) || [];

                const isJobAlreadyApplied = existingAppliedJob.some(existingJob => (
              existingJob.title === jobDetails.title &&
              existingJob.company === jobDetails.company 
              
          ));

          if (!isJobAlreadyApplied) {
              // Add the new job details to the applied jobs
              existingAppliedJob.push(jobDetails);

    
                // Add the new job details to the applied jobs
                existingAppliedJob.push(jobDetails);
    
                // Save the updated applied jobs back to localStorage
                localStorage.setItem('appliedJob', JSON.stringify(existingAppliedJob));
    
                // Alert the user that the job has been applied (you can customize this part)
                alert('Job Applied Successfully!');
              } else {
              // Alert the user that the job has already been applied
              alert('You have already applied for this job.');
          }
        }

// 4 ASP.net


           function applyJob3() {
                const jobDetails = {
                    title: document.getElementById('jobTitle3').innerText,
                    company: document.getElementById('company3').innerText,
                    exp: document.getElementById('exp').innerText,
                    sal: document.getElementById('sal').innerText,
                    location: document.getElementById('location3').innerText
                };
    
                // Retrieve existing applied jobs from localStorage
                const existingAppliedJob = JSON.parse(localStorage.getItem('appliedJob')) || [];

                const isJobAlreadyApplied = existingAppliedJob.some(existingJob => (
              existingJob.title === jobDetails.title &&
              existingJob.company === jobDetails.company 
              
          ));

          if (!isJobAlreadyApplied) {
              // Add the new job details to the applied jobs
              existingAppliedJob.push(jobDetails);

    
                // Add the new job details to the applied jobs
                existingAppliedJob.push(jobDetails);
    
                // Save the updated applied jobs back to localStorage
                localStorage.setItem('appliedJob', JSON.stringify(existingAppliedJob));
    
                // Alert the user that the job has been applied (you can customize this part)
                alert('Job Applied Successfully!');
              } else {
              // Alert the user that the job has already been applied
              alert('You have already applied for this job.');
          }
        }

// 5 React js

function applyJob4() {
    const jobDetails = {
        title: document.getElementById('jobTitle4').innerText,
        company: document.getElementById('company4').innerText,
        exp: document.getElementById('exp').innerText,
        sal: document.getElementById('sal').innerText,
        location: document.getElementById('location4').innerText
    };

    // Retrieve existing applied jobs from localStorage
    const existingAppliedJob = JSON.parse(localStorage.getItem('appliedJob')) || [];

    const isJobAlreadyApplied = existingAppliedJob.some(existingJob => (
  existingJob.title === jobDetails.title &&
  existingJob.company === jobDetails.company 
  
));

if (!isJobAlreadyApplied) {
  // Add the new job details to the applied jobs
  existingAppliedJob.push(jobDetails);


    // Add the new job details to the applied jobs
    existingAppliedJob.push(jobDetails);

    // Save the updated applied jobs back to localStorage
    localStorage.setItem('appliedJob', JSON.stringify(existingAppliedJob));

    // Alert the user that the job has been applied (you can customize this part)
    alert('Job Applied Successfully!');
  } else {
  // Alert the user that the job has already been applied
  alert('You have already applied for this job.');
}
}


// 6 python shiash

function applyJob5() {
    const jobDetails = {
        title: document.getElementById('jobTitle5').innerText,
        company: document.getElementById('company5').innerText,
        exp: document.getElementById('exp').innerText,
        sal: document.getElementById('sal').innerText,
        location: document.getElementById('location5').innerText
    };

    // Retrieve existing applied jobs from localStorage
    const existingAppliedJob = JSON.parse(localStorage.getItem('appliedJob')) || [];

    const isJobAlreadyApplied = existingAppliedJob.some(existingJob => (
  existingJob.title === jobDetails.title &&
  existingJob.company === jobDetails.company 
  
));

if (!isJobAlreadyApplied) {
  // Add the new job details to the applied jobs
  existingAppliedJob.push(jobDetails);


    // Add the new job details to the applied jobs
    existingAppliedJob.push(jobDetails);

    // Save the updated applied jobs back to localStorage
    localStorage.setItem('appliedJob', JSON.stringify(existingAppliedJob));

    // Alert the user that the job has been applied (you can customize this part)
    alert('Job Applied Successfully!');
  } else {
  // Alert the user that the job has already been applied
  alert('You have already applied for this job.');
}
}
        
        
// 7 data science

function applyJob6() {
    const jobDetails = {
        title: document.getElementById('jobTitle6').innerText,
        company: document.getElementById('company6').innerText,
        exp: document.getElementById('exp').innerText,
        sal: document.getElementById('sal').innerText,
        location: document.getElementById('location6').innerText
    };

    // Retrieve existing applied jobs from localStorage
    const existingAppliedJob = JSON.parse(localStorage.getItem('appliedJob')) || [];

    const isJobAlreadyApplied = existingAppliedJob.some(existingJob => (
  existingJob.title === jobDetails.title &&
  existingJob.company === jobDetails.company 
  
));

if (!isJobAlreadyApplied) {
  // Add the new job details to the applied jobs
  existingAppliedJob.push(jobDetails);


    // Add the new job details to the applied jobs
    existingAppliedJob.push(jobDetails);

    // Save the updated applied jobs back to localStorage
    localStorage.setItem('appliedJob', JSON.stringify(existingAppliedJob));

    // Alert the user that the job has been applied (you can customize this part)
    alert('Job Applied Successfully!');
  } else {
  // Alert the user that the job has already been applied
  alert('You have already applied for this job.');
}
}


// 8 network

function applyJob7() {
    const jobDetails = {
        title: document.getElementById('jobTitle7').innerText,
        company: document.getElementById('company7').innerText,
        exp: document.getElementById('exp').innerText,
        sal: document.getElementById('sal').innerText,
        location: document.getElementById('location7').innerText
    };

    // Retrieve existing applied jobs from localStorage
    const existingAppliedJob = JSON.parse(localStorage.getItem('appliedJob')) || [];

    const isJobAlreadyApplied = existingAppliedJob.some(existingJob => (
  existingJob.title === jobDetails.title &&
  existingJob.company === jobDetails.company 
  
));

if (!isJobAlreadyApplied) {
  // Add the new job details to the applied jobs
  existingAppliedJob.push(jobDetails);


    // Add the new job details to the applied jobs
    existingAppliedJob.push(jobDetails);

    // Save the updated applied jobs back to localStorage
    localStorage.setItem('appliedJob', JSON.stringify(existingAppliedJob));

    // Alert the user that the job has been applied (you can customize this part)
    alert('Job Applied Successfully!');
  } else {
  // Alert the user that the job has already been applied
  alert('You have already applied for this job.');
}
}


// 9 full stack developer

function applyJob8() {
    const jobDetails = {
        title: document.getElementById('jobTitle8').innerText,
        company: document.getElementById('company8').innerText,
        exp: document.getElementById('exp').innerText,
        sal: document.getElementById('sal').innerText,
        location: document.getElementById('location8').innerText
    };

    // Retrieve existing applied jobs from localStorage
    const existingAppliedJob = JSON.parse(localStorage.getItem('appliedJob')) || [];

    const isJobAlreadyApplied = existingAppliedJob.some(existingJob => (
  existingJob.title === jobDetails.title &&
  existingJob.company === jobDetails.company 
  
));

if (!isJobAlreadyApplied) {
  // Add the new job details to the applied jobs
  existingAppliedJob.push(jobDetails);


    // Add the new job details to the applied jobs
    existingAppliedJob.push(jobDetails);

    // Save the updated applied jobs back to localStorage
    localStorage.setItem('appliedJob', JSON.stringify(existingAppliedJob));

    // Alert the user that the job has been applied (you can customize this part)
    alert('Job Applied Successfully!');
  } else {
  // Alert the user that the job has already been applied
  alert('You have already applied for this job.');
}
}

// 10 Digital marketing

function applyJob9() {
    const jobDetails = {
        title: document.getElementById('jobTitle9').innerText,
        company: document.getElementById('company9').innerText,
        exp: document.getElementById('exp').innerText,
        sal: document.getElementById('sal').innerText,
        location: document.getElementById('location9').innerText
    };

    // Retrieve existing applied jobs from localStorage
    const existingAppliedJob = JSON.parse(localStorage.getItem('appliedJob')) || [];

    const isJobAlreadyApplied = existingAppliedJob.some(existingJob => (
  existingJob.title === jobDetails.title &&
  existingJob.company === jobDetails.company 
  
));

if (!isJobAlreadyApplied) {
  // Add the new job details to the applied jobs
  existingAppliedJob.push(jobDetails);


    // Add the new job details to the applied jobs
    existingAppliedJob.push(jobDetails);

    // Save the updated applied jobs back to localStorage
    localStorage.setItem('appliedJob', JSON.stringify(existingAppliedJob));

    // Alert the user that the job has been applied (you can customize this part)
    alert('Job Applied Successfully!');
  } else {
  // Alert the user that the job has already been applied
  alert('You have already applied for this job.');
}
}

// 11 Data entry

function applyJob10() {
    const jobDetails = {
        title: document.getElementById('jobTitle10').innerText,
        company: document.getElementById('company10').innerText,
        exp: document.getElementById('exp').innerText,
        sal: document.getElementById('sal').innerText,
        location: document.getElementById('location10').innerText
    };

    // Retrieve existing applied jobs from localStorage
    const existingAppliedJob = JSON.parse(localStorage.getItem('appliedJob')) || [];

    const isJobAlreadyApplied = existingAppliedJob.some(existingJob => (
  existingJob.title === jobDetails.title &&
  existingJob.company === jobDetails.company 
  
));

if (!isJobAlreadyApplied) {
  // Add the new job details to the applied jobs
  existingAppliedJob.push(jobDetails);


    // Add the new job details to the applied jobs
    existingAppliedJob.push(jobDetails);

    // Save the updated applied jobs back to localStorage
    localStorage.setItem('appliedJob', JSON.stringify(existingAppliedJob));

    // Alert the user that the job has been applied (you can customize this part)
    alert('Job Applied Successfully!');
  } else {
  // Alert the user that the job has already been applied
  alert('You have already applied for this job.');
}
}

// 12 Blockchain developer

function applyJob11() {
                const jobDetails = {
                    title: document.getElementById('jobTitle11').innerText,
                    company: document.getElementById('company11').innerText,
                    exp: document.getElementById('exp').innerText,
                    sal: document.getElementById('sal').innerText,
                    location: document.getElementById('location11').innerText
                };
    
                // Retrieve existing applied jobs from localStorage
                const existingAppliedJob = JSON.parse(localStorage.getItem('appliedJob')) || [];

                const isJobAlreadyApplied = existingAppliedJob.some(existingJob => (
              existingJob.title === jobDetails.title &&
              existingJob.company === jobDetails.company 
              
          ));

          if (!isJobAlreadyApplied) {
              // Add the new job details to the applied jobs
              existingAppliedJob.push(jobDetails);

    
                // Add the new job details to the applied jobs
                existingAppliedJob.push(jobDetails);
    
                // Save the updated applied jobs back to localStorage
                localStorage.setItem('appliedJob', JSON.stringify(existingAppliedJob));
    
                // Alert the user that the job has been applied (you can customize this part)
                alert('Job Applied Successfully!');
              } else {
              // Alert the user that the job has already been applied
              alert('You have already applied for this job.');
          }
        }
    