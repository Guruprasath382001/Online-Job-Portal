
        // Sample data - replace with your actual data
        const items = [
            { id: 1, name:'python ', company: 'HCL Technologies',conditions:'Python,HTML,CSS,Flask,Django' },
            { id: 2, name:'java ', company: 'TATA Consultancy Services',conditions:'Java,HTML,CSS,Springboot,Hibernate',salary:'5L CTC' },
            { id: 3, name:'Embedded Developer', company: 'IBM India',conditions:'IOT,Sensors,Arduino' },
            { id: 4, name:'ASP.net Developer', company: 'Syncfusion Software Solutions',conditions:'asp.net,C#,Game development'},
            
        ];

        function searchItems() {
            const searchInput = document.getElementById('searchInput');
            const searchTerm = searchInput.value.toLowerCase();

            // Filter items based on the search term
            const filteredItems = items.filter(item =>
                item.name.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm)
            );

            // Store the search results in localStorage
            localStorage.setItem('searchedResult', JSON.stringify(filteredItems));

            // Redirect to the next page
            window.location.href = '/searchedresult';
        }

 function searchItems() {
     // Replace 'nextPage.html' with the actual URL of your next page
    window.location.href = '/searchedresult';
 }