// Ajoute un événement au clic du bouton "Ajouter"
document.getElementById('add-task').addEventListener('click', function() {
    // Récupère la valeur du champ de texte pour la nouvelle tâche
    const taskText = document.getElementById('new-task').value;
    // Si le champ de texte est vide, arrête l'exécution de la fonction
    if (taskText === '') return;

    // Récupère l'élément HTML qui contient la liste des tâches
    const taskList = document.getElementById('task-list');

    // Crée un nouvel élément de liste (li) pour la nouvelle tâche
    const li = document.createElement('li');
    // Assigne le texte de la tâche au nouvel élément de liste
    li.textContent = taskText;

    // Crée un bouton "Supprimer" pour la tâche
    const deleteBtn = document.createElement('button');
    // Définit le texte du bouton
    deleteBtn.textContent = 'Supprimer';
    // Ajoute un événement au clic du bouton "Supprimer"
    deleteBtn.addEventListener('click', function() {
        // Supprime l'élément de la liste des tâches
        taskList.removeChild(li);
    });

    // Ajoute le bouton "Supprimer" à l'élément de liste (li)
    li.appendChild(deleteBtn);
    // Ajoute l'élément de liste à la liste des tâches
    taskList.appendChild(li);

    // Réinitialise le champ de texte pour une nouvelle entrée
    document.getElementById('new-task').value = '';
});
