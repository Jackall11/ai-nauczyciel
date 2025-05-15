console.log("AI Nauczyciel uruchomiony 🚀");

document.querySelectorAll('.teacher-card').forEach(card => {
  card.addEventListener('click', () => {
    // Usuń klasę 'selected' z innych kart
    document.querySelectorAll('.teacher-card').forEach(c => c.classList.remove('selected'));
    
    // Dodaj do klikniętej karty
    card.classList.add('selected');
    
    const selectedTeacher = card.getAttribute('data-teacher');
    console.log("Wybrany nauczyciel:", selectedTeacher);

    // Zapis do localStorage
    localStorage.setItem('selectedTeacher', selectedTeacher);
  });
});
