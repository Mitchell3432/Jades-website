document.getElementById('question-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if all questions are answered
    var inputs = document.querySelectorAll('input[type="text"]');
    var allAnswered = true;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            allAnswered = false;
            break;
        }
    }

    // If all questions are answered, show the overlay
    if (allAnswered) {
        document.getElementById('overlay').style.display = 'block';
    } else {
        alert('Please answer all questions before submitting.');
    }
});

// Add event listener to the exit button
document.getElementById('exit-btn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});
