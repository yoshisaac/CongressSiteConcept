function redirect(directory) {
    if (directory[0] !== '/')
	directory = "/" + directory;
    
    fetch('http://127.0.0.1:3000' + directory)
	.then(response => {
	    if (response.ok) {
		// Redirect to the desired location
		window.location.href = 'http://127.0.0.1:3000' + directory;
	    } else {
		// Handle errors
		console.error('Error:', response.status);
	    }
	})
	.catch(error => {
	    // Handle network errors
	    console.error('Network error:', error);
	});
}
