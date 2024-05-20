var menu=prompt("ingrese menu");

switch (menu) {
    case "carne":
        console.log("Acompañar la elección con vino tinto")
        break;
    case "pescado":
        console.log("Acompañar la elección con vino blanco")
        break;
    case "verdura":
        console.log("Acompañar la elección con agua")
        break;
    default:
        console.log("elija carne,pescado o verdura")
        break;
}

