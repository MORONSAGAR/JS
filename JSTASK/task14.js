// Function to get formatted date
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Function to get formatted time
function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}.${minutes}.${seconds}`;
}

// Function to get human-readable time difference
function timeAgo(date) {
    const now = new Date(); //get the current date and time
    const seconds = Math.floor((now - date) / 1000); //calculate the difference in seconds.
    const minutes = Math.floor(seconds / 60); //convert seconds to minutes
    const hours = Math.floor(minutes / 60); //convert minutes to hours
    const days = Math.floor(hours / 24); // convert hours to days
    const months = Math.floor(days / 30); // estimate days to months (assuming 30 days per month)
    const years = Math.floor(months / 12); // estimate months to years

    //conditional statements to return formatted strings
    if (years > 0) {
        return years === 1 ? '1 year ago' : `${years} years ago`;
    } else if (months > 0) {
        return months === 1 ? '1 month ago' : `${months} months ago`;
    } else if (days > 0) {
        return days === 1 ? '1 day ago' : `${days} days ago`;
    } else if (hours > 0) {
        return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
    } else if (minutes > 0) {
        return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
    } else {
        return seconds === 1 ? '1 second ago' : `${seconds} seconds ago`;
    }
}

// Usage
const currentDate = new Date();
console.log("Formatted Date (dd/mm/yyyy):", formatDate(currentDate));
console.log("Formatted Time (hh.mm.ss):", formatTime(currentDate));
console.log("Time Ago:", timeAgo(new Date(currentDate.getTime() - 5000))); // Example: 5 seconds ago





// This code is useful for applications like social media platforms, where users typically see timestamps in various formats corresponding to the time of actions or posts.