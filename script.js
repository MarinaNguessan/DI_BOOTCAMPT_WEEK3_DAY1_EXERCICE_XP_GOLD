
    /* Recuperons la première balise enfant du corps du document, qui est notre tableau. */
    let array = document.body.firstElementChild;
/* parcourons chaque ligne du tableau en utilisant une boucle for.*/
for (let i = 0; i < array.rows.length; i++) {
    /*pour chaque ligne, nous récupérons la cellule qui a l'index de l'itération de la boucle (c'est-à-dire la cellule en diagonale)*/
    let row = array.rows[i];
    for (let j = 0; j < row.cells.length; j++) {
        /* modification du style de cette cellule pour changer la couleur de fond en rouge.*/
        let cell = row.cells[j];
        if (i === j) {
            cell.style.backgroundColor = "red";
        }
    }
}
    