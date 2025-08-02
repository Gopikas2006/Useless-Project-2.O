// Data arrays
         const animalImages = [
            { id: 1, name: "Moody Monkey", url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT_xpZgQB0cg1nASNeyvx8lG5UpEnC9VzMItvN-mrQvuXUPOD2wZZqhY5tzy8KN1ACRvMkObkqjizVRHSJ-RYvBaw" },
            { id: 2, name: "Boss Doggy", url: "https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { id: 3, name: "Sassy Gazelle", url: "https://images.pexels.com/photos/469676/pexels-photo-469676.jpeg" },
            { id: 4, name: "Popstar Penguin", url: "https://images.pexels.com/photos/2078474/pexels-photo-2078474.jpeg" },
            { id: 5, name: "Proudy Pig", url: "https://images.pexels.com/photos/5080099/pexels-photo-5080099.jpeg" },
            { id: 6, name: "Ninja Turtle", url: "https://images.pexels.com/photos/798094/pexels-photo-798094.jpeg" },
        ];


        const buildingImages = [
            { id: 1, name: "Upside-Down House", url: "https://images.pexels.com/photos/3735570/pexels-photo-3735570.jpeg" },
            { id: 2, name: "Giant Shoe House", url: "https://t3.ftcdn.net/jpg/00/35/72/80/240_F_35728033_qPiiiyOBelNUHIOnkuC1uT6fu6OSkGmQ.jpg" },
            { id: 3, name: "Lovely Landpit", url: "https://t3.ftcdn.net/jpg/00/52/48/66/240_F_52486643_JZL97JZ9tKzTGWO7RU3wf2ZvOZ9LjcPs.jpg" },
            { id: 4, name: "Top Trash", url: "https://t4.ftcdn.net/jpg/13/66/10/29/240_F_1366102953_eidqoEtQopSHifJseHbgBR3HVtf7Xujw.jpg" },
            { id: 5, name: "Creepy Castle", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPCv8cArY8OyANCiRuWIbZ7xm0eDtKGnnfKQ&s" },
            { id: 6, name: "Fungi Franchise", url: "https://cdn.mos.cms.futurecdn.net/68FRUGXrDMe3A8cR3BBPRZ-1200-80.jpg" },
        ];

        const quirkyJobs = [
            "Professional Bubble Wrap Popper",
            "Chief TV Watcher",
            "Legendary sleeper",
            "Professional Netflix Binge-Watcher",
            "Professional Time Waster",
            "Oscar Actor",
            "Professional Procrastinator",
            "Chief Fun Officer",
            "Peak Self Lover",
            "Professional Couch Potato",
            "Meme Quality Inspector",
            "Professional Daydreamer",
            "Chief Meme Officer",
            "Professional Depressionist ",
            
        ];

        const funnyAliases = [
            "Sugunan",
            "Soman",
            "Ramanan",
            "Chakkappan",
            "Pazhampori Rajan",
            "Appam Jose",
            "Puttu Babu",
            "Idichakka Reji",
             "Ramani",
            "Maniyamma",
            "Panjaali",
            "Lulumol",
            "Narayani",
            "Kalli paaru",
            "Thankam Aunty",
            "Saramma",
            "Moru Mary",
            "Chammandhi Chinnu",
        ];

        // Global variables to store selections
        let selectedAnimal = null;
        let selectedBuilding = null;
        let generatedAlias = "";
        let generatedBio = "";

        // Initialize the page
        function init() {
            populateAnimals();
            populateBuildings();
            populateJobs();
        }

        function populateAnimals() {
            const animalGrid = document.getElementById('animal-grid');
            animalGrid.innerHTML = '';
            
            animalImages.forEach(animal => {
                const div = document.createElement('div');
                div.className = 'image-option';
                div.onclick = () => selectAnimal(animal);
                div.innerHTML = `
                    <img src="${animal.url}" alt="${animal.name}">
                    <p>${animal.name}</p>
                `;
                animalGrid.appendChild(div);
            });
        }

        function populateBuildings() {
            const buildingGrid = document.getElementById('building-grid');
            buildingGrid.innerHTML = '';
            
            buildingImages.forEach(building => {
                const div = document.createElement('div');
                div.className = 'image-option building-option';
                div.onclick = () => selectBuilding(building);
                div.innerHTML = `
                    <img src="${building.url}" alt="${building.name}">
                    <p>${building.name}</p>
                `;
                buildingGrid.appendChild(div);
            });
        }

        function populateJobs() {
            const jobSelect = document.getElementById('job');
            quirkyJobs.forEach(job => {
                const option = document.createElement('option');
                option.value = job;
                option.textContent = job;
                jobSelect.appendChild(option);
            });
        }

        function selectAnimal(animal) {
            // Remove previous selection
            document.querySelectorAll('#animal-grid .image-option').forEach(el => {
                el.classList.remove('selected');
            });
            
            // Add selection to clicked item
            event.currentTarget.classList.add('selected');
            selectedAnimal = animal;
        }

        function selectBuilding(building) {
            // Remove previous selection
            document.querySelectorAll('#building-grid .image-option').forEach(el => {
                el.classList.remove('selected');
            });
            
            // Add selection to clicked item
            event.currentTarget.classList.add('selected');
            selectedBuilding = building;
        }

        function generateBiography() {
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const gender = document.getElementById('gender').value;
            const job = document.getElementById('job').value;

            // Validation
            if (!name || !age || !gender || !selectedAnimal || !selectedBuilding || !job) {
                alert('Please fill in all fields and make all selections!');
                return;
            }

            // Generate random alias
            generatedAlias = funnyAliases[Math.floor(Math.random() * funnyAliases.length)];

            // Generate biography
            generatedBio = `Meet ${generatedAlias} (formerly known as ${name}), a ${age}-year-old ${gender} who has mastered the art of being a ${job}.

This remarkable individual calls the ${selectedBuilding.name} home, where they spend their days perfecting their craft and contemplating the mysteries of existence (and where to find the best snacks).

Known throughout the land for their ${selectedAnimal.name} energy and unmatched dedication to their profession, ${generatedAlias} has become a legend in their own lunchtime.

When not busy with their important work as a ${job}, you can find them practicing their signature move: the "Professional Confused Look" - a skill that has served them well in countless meetings and social gatherings.

Fun fact: ${generatedAlias} once tried to teach their pet goldfish how to play chess, but gave up after realizing the goldfish was actually winning.`;

            // Display biography
            displayBiography();
        }

        function displayBiography() {
            // Hide form and show biography
            document.getElementById('form-section').style.display = 'none';
            document.getElementById('biography-section').classList.add('show');

            // Populate biography display
            document.getElementById('profile-image').src = selectedAnimal.url;
            document.getElementById('profile-image').alt = selectedAnimal.name;
            document.getElementById('alias-name').textContent = `🎉 Behold: ${generatedAlias}! 🎉`;
            document.getElementById('job-title').textContent = document.getElementById('job').value;
            document.getElementById('home-image').src = selectedBuilding.url;
            document.getElementById('home-image').alt = selectedBuilding.name;
            document.getElementById('biography-text').textContent = generatedBio;
        }

        function resetForm() {
            // Reset form
            document.getElementById('name').value = '';
            document.getElementById('age').value = '';
            document.getElementById('gender').value = '';
            document.getElementById('job').value = '';
            
            // Clear selections
            document.querySelectorAll('.image-option').forEach(el => {
                el.classList.remove('selected');
            });
            
            selectedAnimal = null;
            selectedBuilding = null;
            generatedAlias = '';
            generatedBio = '';

            // Show form and hide biography
            document.getElementById('form-section').style.display = 'block';
            document.getElementById('biography-section').classList.remove('show');
        }

        function copyBiography() {
            const bioText = `${generatedAlias}\n\n${generatedBio}`;
            navigator.clipboard.writeText(bioText).then(() => {
                alert('Biography copied to clipboard! 📋');
            }).catch(() => {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = bioText;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                alert('Biography copied to clipboard! 📋');
            });
        }

        // Initialize when page loads
        window.onload = init;