function selectReference(reference) {
    document.querySelector('.dropdown-toggle').innerText = reference;
}

function generateReport() {
    var selectedReference = document.querySelector('.dropdown-toggle').innerText;
    var userInput = document.getElementById('inputText').value.toLowerCase();
    var outputElement = document.getElementById('output');

    // Check if the selected reference is "GRI standards" and user input contains "company x"
    if (selectedReference === 'GRI standards' && userInput.includes('company x')) {
        var response = `
            <strong>Company X Sustainability Report - Environmental Performance</strong>
            <br><br>
            <strong>Reporting Period:</strong> January 1, 2023 - December 31, 2023
            <br><br>
            <strong>1. Overview:</strong>
            <ul>
                <li>Company X is committed to sustainable practices, striving for environmental responsibility across its operations.</li>
            </ul>
            <strong>2. Governance:</strong>
            <ul>
                <li>Company X's board oversees environmental policies, ensuring compliance with regulations. The Environmental Management Team monitors and updates protocols.</li>
            </ul>
            <strong>3. Environmental Policy:</strong>
            <ul>
                <li>Our policy emphasizes resource efficiency, pollution prevention, and conservation. Regular assessments ensure alignment with GRI Standards.</li>
            </ul>
            <strong>4. Material Aspects:</strong>
            <ul>
                <li><strong>a. Energy Consumption:</strong>
                    <ul>
                        <li>Total energy consumed: 15,000 MWh</li>
                        <li>Renewable energy: 30%</li>
                        <li>Efforts to increase renewable sources are ongoing.</li>
                    </ul>
                </li>
                <li><strong>b. Water Management:</strong>
                    <ul>
                        <li>Total water consumption: 500,000 cubic meters</li>
                        <li>Focus on water recycling and reducing usage.</li>
                    </ul>
                </li>
                <li><strong>c. Emissions:</strong>
                    <ul>
                        <li>Scope 1 emissions: 5,000 metric tonnes CO2</li>
                        <li>Scope 2 emissions: 3,000 metric tonnes CO2</li>
                        <li>Emission reduction initiatives in progress.</li>
                    </ul>
                </li>
            </ul>
        `;
    }

    // Check if the selected reference is "Kenya’s National Climate Change Action Plan" and user input contains "company x"
    else if (selectedReference === "Kenya’s National Climate Change Action Plan" && userInput.includes('company x')) {
        var response = `
            <strong>Company X Sustainability Report - Kenya Climate Action Plan Compliance</strong>
            <br><br>
            <strong>Reporting Period:</strong> January 1, 2023 - December 31, 2023
            <br><br>
            <strong>1. Overview:</strong>
            <ul>
                <li>Company X is committed to aligning its operations with Kenya's National Climate Change Action Plan, contributing to the country's climate resilience and sustainable development goals.</li>
            </ul>
            <strong>2. Kenya Climate Action Plan Compliance:</strong>
            <br>
            <strong>a.  Renewable Energy Adoption:</strong>
            <ul>
                <li>Percentage of energy sourced from renewables: 25%.</li>
                <li>Collaborative efforts with local providers for increased renewable energy adoption.</li>
            </ul>
            <strong>b. Carbon Emission Reduction:</strong>
            <ul>
                <li>Implemented initiatives resulting in a 10% reduction in carbon emissions.</li>
                <li>Contributed to local reforestation projects to offset emissions.</li>
            </ul>
            <strong>c. Adaptation Strategies:</strong>
            <ul>
                <li>Conducted vulnerability assessments to identify climate risks.</li>
                <li>Implemented adaptive measures to enhance resilience in operations.</li>
            </ul>
            <strong>3. Collaboration with Local Communities:</strong>
            <br>
            <strong>a. Community Engagement Programs:</strong>
            <ul>
                <li>Participated in community initiatives addressing climate change awareness.</li>
                <li>Sponsored local projects focusing on sustainable agriculture and conservation.</li>
            </ul>
            <strong>b. Support for Climate-Smart Agriculture:</strong>
            <ul>
                <li>Collaborated with local farmers to promote climate-smart agricultural practices.</li>
                <li>Training programs on sustainable farming techniques.</li>
            </ul>
            
        `;
    }

    // Create a temporary element to parse and render HTML
    var tempElement = document.createElement('div');
    tempElement.innerHTML = response;

    
    // Function to simulate typing effect
    function typeEffect() {
        outputElement.innerHTML = ''; // Clear the output element
        var i = 0;
        var interval = setInterval(function () {
            if (i < tempElement.childNodes.length) {
                outputElement.appendChild(tempElement.childNodes[i].cloneNode(true));
                i++;
            } else {
                clearInterval(interval); // Stop the interval once all nodes are appended
            }
        }, 250); // Adjust the interval for typing speed
    }

    typeEffect(); // Call the typing effect function
}
