// Like or Dislike Button
 // Get references to the button and like count elements
// document.addEventListener('DOMContentLoaded', () => {
   // const commentElements = document.querySelectorAll('.comment');
    //const projectElements = document.querySelectorAll('.project');
  
  // commentElements.forEach((comment) => {
     // const likeButton = comment.querySelector('.like-button');
      //const likeCount = comment.querySelector('.like-count');
     // Initialize like status from local storage or default to false (not liked)
     // Initialize like count from local storage or default to 0
     // let liked = JSON.parse(localStorage.getItem(`liked_${comment.dataset.commentId}`)) || false;
      //let count = parseInt(localStorage.getItem(`likes_${comment.dataset.commentId}`)) || 0;
    // Set the initial like count  and button state
     // likeCount.textContent = count;
    
     // Event listener for the like button
   //  likeButton.addEventListener('click', () => {
        // Toggle the liked state
       //liked = !liked;
        // Increment or decrement the count
      // count = liked ? count + 1 : count - 1;
  
        //likeCount.textContent = count;
      
  
       // Storage the updated count and liked status in local storage 
        //localStorage.setItem(`likes_${comment.dataset.commentId}`, count);
       // localStorage.setItem(`liked_${comment.dataset.commentId}`, JSON.stringify(liked));
     // });
   // });
    
  //  projectElements.forEach((project) => {
    //const likeButton = project.querySelector('.like-button');
      //const likeCount = project.querySelector('.like-count');
     // Initialize like status from local storage or default to false (not liked)
     // Initialize like count from local storage or default to 0
    //let liked = JSON.parse(localStorage.getItem(`liked_${project.dataset.projectId}`)) || false;
     //let count = parseInt(localStorage.getItem(`likes_${project.dataset.projectId}`)) || 0;
  
      //likeCount.textContent = count;
  
     // Event listener for the like button
    // likeButton.addEventListener('click', () => {
      // Toggle the liked state
      //liked = !liked;
      // Increment or decrement the count
      //count = liked ? count + 1 : count - 1;
  
     //likeCount.textContent = count;
  
     // Storage the updated count and liked status in local storage 
        //localStorage.setItem(`likes_${project.dataset.projectId}`, count);
        //localStorage.setItem(`liked_${project.dataset.projectId}`, JSON.stringify(liked));
      //});
 /// });
  //});

  function join(date, options, separator) {
    function format(option) {
      let formatter = new Intl.DateTimeFormat('en-US', option);
      return formatter.format(date);
    }
    return options.map(format).join(separator);
  }
  // Create a Date object for
  const myDate = new Date();
  const options = [{weekday: 'long'},{ day: 'numeric' }, { month: 'short' }, { year: 'numeric' }];
  const formattedDate = join(myDate, options, ' ~ ');
  const formattedDateTime = `${formattedDate}`;
  
  document.getElementById('year').innerText = myDate.getUTCFullYear();
  document.getElementById('datetime').innerText = formattedDateTime;
  
   function datetimes(){
    
    // Create a Date object for example Fri, 12 Nov 2020
  const projects = [
    {
      startDate: "2024-02-05 ",
      endDate: "2024-02-19T01:25"
    }, 
    {
        startDate: "2024-04-27 ", 
        endDate: "2024-05-12T21:45" 
    },
    {
      startDate: "2024-05-20",
      endDate: "2024-06-08T18:00"
    },
    {
      startDate: "2023-12-29",
      endDate: "2024-01-25T15:45"
    },
   {
    startDate: "2024-07-21"
   }
    
    // Add more projects here
  ];

  projects.forEach((project, index) => {
    function formatDateTime(date) {
      const options = {
      Year: "numeric",
      Month: "2-digit",
      Day: "2-digit",
      Hour: "2-digit",
      Minute: "2-digit",
      Hour12: false, // Use 24-hour format
      timeZone: "UTC", // Use UTC timezone
      };
      return date.toLocaleString("en-US", options);
      }
      
    const startDateElement = document.getElementById(`start-date-${index + 1}`);
    const endDateElement = document.getElementById(`end-date-${index + 1}`);
    const startDate = new Date(project.startDate);
    const endDate = new Date(project.endDate);
    
    startDateElement.innerText = `${ formatDateTime = startDate.toLocaleDateString()}`;
    endDateElement.innerText = `${endDate.toLocaleDateString()} ${ formatDateTime = endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase()}`;

  }); 
}
   setInterval(datetimes, 1000);
   datetimes();
