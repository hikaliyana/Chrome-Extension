// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

let myDreams = [ "ocean", "jungle", "ship" ]

function save(dreams) {
  for (let i = 0; i < myDreams.length; i++) {
    dreams += myDreams[i]
  }
  localStorage.setItem("myDreams", JSON.stringify(dreams))
  
}




let dreamsFromLocal = JSON.parse ( localStorage.getItem("myDreams") )

  console.log(dreamsFromLocal)

