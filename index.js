let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")

const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        //  listItems += "<li><a href='" + leads[i] + "' target='_blank'>" + leads[i] + "</a></li>"
        listItems += `  
            <li>
                <a target ='_blank' href ='${leads[i]}'>
                    ${leads[i]} 
                </a> 
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})


tabBtn.addEventListener("click", function() {
   /*  chrome.tabs.query({active:true, currentWindow: true},function(tabs){
    }) */
    
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem( "myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })

    myLeads.push(tabs[0].url)
    localStorage.setItem( "myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})




//truthy and falsy value

/* falsy: 
false; 
0;
""; 
null;     -> how you as a developer signalize emptiness
undefined;  -> how JavaScript signalizes emptiness
NaN
 */

/* console.log( Boolean("") ) // false
console.log( Boolean("0") ) // true** a string
console.log( Boolean(100) ) // true
console.log( Boolean(null) ) // false
console.log( Boolean([0]) ) // true
console.log( Boolean(-0) ) // false** */




/* RECAP

@ const & let ( var )
@ addEventListener("event", function(){})
@ innerHTML
@ input.value
@ function parameters & arguments
@ template strings -> ` ${} `
@ localStorage 
@ The JSON object -> .stringify & .parse
        manifest.JSON
@ objects in arrays