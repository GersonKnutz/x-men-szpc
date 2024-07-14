const characters = document.querySelectorAll('.character');

characters.forEach(character => {
   character.addEventListener('mouseenter', () => {
        
       if(window.innerWidth < 450) {
         window.scrollTo({top: 0, behavior: 'smooth'})
       }

        removeCharacterSelection();

        character.classList.add('selected');

        changeImageCharacterSelected(character);

        changeNameCharacterSelected(character);

        changeCharacterDescription(character);
   })
})

function changeCharacterDescription(character) {
   const characterDescription = document.getElementById('character-description');
   characterDescription.innerText = character.getAttribute('data-description');
}

function changeNameCharacterSelected(character) {
   const characterName = document.getElementById('character-name');
   characterName.innerText = character.getAttribute('data-name');
}

function changeImageCharacterSelected(character) {
   const imageBigCharacter = document.querySelector('.big-character');
   const characterId = character.attributes.id.value;
   imageBigCharacter.src = `./src/image/card-${characterId}.png`;
}

function removeCharacterSelection() {
   const characterSelected = document.querySelector('.selected');
   characterSelected.classList.remove('selected');
}
