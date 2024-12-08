document.addEventListener('DOMContentLoaded', function() {
    // Function to handle showing and hiding the volunteer form
    function toggleVolunteerForm(buttonId, formId) {
        const volunteerBtn = document.getElementById(buttonId);
        const volunteerForm = document.getElementById(formId);

        if (volunteerBtn) {
            volunteerBtn.addEventListener('click', function() {
                // Toggle the visibility of the volunteer form
                if (volunteerForm.style.display === "none" || volunteerForm.style.display === "") {
                    volunteerForm.style.display = "block";
                } else {
                    volunteerForm.style.display = "none";
                }
            });
        }
    }

    // Function to handle charity details hover effect
    function setUpCharityDetails(charityDetailsId, charityInfo) {
        const charityDetails = document.getElementById(charityDetailsId);

        if (charityDetails) {
            charityDetails.addEventListener('mouseover', function() {
                charityDetails.innerHTML = charityInfo;
            });

            charityDetails.addEventListener('mouseout', function() {
                charityDetails.innerHTML = "Hover over the text below to learn more about this charity's outreach programs.";
            });
        }
    }

    // Initialize event listeners for specific charities
    toggleVolunteerForm('volunteerBtnSaintJoseph', 'volunteerFormSaintJoseph');
    setUpCharityDetails('charityDetailsSaintJoseph', "Saint Joseph provides comprehensive support through healthcare, education, and housing services, reaching thousands of families in need every year.");

    toggleVolunteerForm('volunteerBtnMakeAWish', 'volunteerFormMakeAWish');
    setUpCharityDetails('charityDetailsMakeAWish', "The Make-A-Wish Foundation grants seriously ill children the chance to fulfill their most heartfelt wish, bringing hope, strength, and joy.");

    toggleVolunteerForm('volunteerBtnChildrenInternational', 'volunteerFormChildrenInternational');
    setUpCharityDetails('charityDetailsChildrenInternational', "Children International helps children in poverty through education, healthcare, and life skills training globally.");
});




