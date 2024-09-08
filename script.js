function submitFeedback() {
    // Fetch selected values or text from feedback form
    var usefulness = document.querySelector('input[name="usefulness"]:checked');
    var recommendation = document.querySelector('input[name="recommendation"]:checked');
    var additionalFeedback = document.getElementById('additional_feedback').value;

    // Example of how you might handle the feedback submission (could be sent to server, etc.)
    console.log("Usefulness: ", usefulness ? usefulness.value : "Not selected");
    console.log("Recommendation: ", recommendation ? recommendation.value : "Not selected");
    console.log("Additional Feedback: ", additionalFeedback);

    // Display thank you message
    document.getElementById('thankYouMessage').style.display = 'block';
}
