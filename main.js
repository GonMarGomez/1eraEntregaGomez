let nombre = (prompt ('Ingrese su nombre'))
alert (`${nombre} bienvenido a nuestra pagina web`)
let main = ()=>{
let producto = (prompt (`Escriba el nombre del producto:
 Notebooks
 Tablets 
 Celulares`).toLocaleLowerCase())
switch(producto){
    case 'notebooks':
        alert (`${nombre} En la siguiente muestra debe elegir con el numero de oden`)
       let opcionNotebook = prompt (`Opciones de Notebooks:
        1)NOTEBOOK LENOVO V15 PENTIUM N5030 4GB 1TB 15.6" FREE
        2)NOTEBOOK HP 245 G8 AMD ATHLON 3020E 1TB 4GB 14 FREE 
        3)NOTEBOOK ASUS X515EA I3 115G4 4GB SSD 256GB 15.6 W11`)
        if(opcionNotebook === "1)" || '1'){
            alert (`El precio a pagar es $218289`)
        }
        else if(opcionNotebook === '1)' || '2'){
            alert (`El precio a pagar es $218499`) 
        }
        else if(opcionNotebook === '3)' || '3'){
            alert (`El precio a pagar es $249990`) 
        }
        else{
            alert (`No se ha encontrado el ID del producto, recargue la página`) 
        }
            break;
        case 'tablets':
        alert (`${nombre} En la siguiente muestra debe elegir con el numero de oden`)
        let opcionTablet = prompt (`Opciones de Tablets:
         1)TABLET PC BOX PCB-T801 FEEL 2GB 32GB 8
         2)TABLET AMAZON FIRE HD 10 32GB WIFI OLIVE
         3)TABLET LENOVO 10" TB-X505F 16GB 2GB WIFI ANDROID 8.0`)
         if(opcionTablet === "1)" || '1'){
             alert (`El precio a pagar es $40009`)
         }
         else if(opcionTablet === '1)' || '2'){
             alert (`El precio a pagar es $60619`) 
         }
         else if(opcionTablet === '3)' || '3'){
             alert (`El precio a pagar es $72819`) 
         }
         else{
             alert (`No se ha encontrado el ID del producto, recargue la página`) 
         }
             break;
            case 'celulares':
                alert (`${nombre} En la siguiente muestra debe elegir con el numero de oden`)
                let opcionCelulares = prompt (`Opciones de Celulares:
                 1)Samsung Galaxy A04 128 GB negro 4 GB RAM
                 2)Celular Samsung Galaxy A13 128gb + 4gb Ram Pls Lcd Negro
                 3)Xiaomi Redmi Note 11 (Snapdragon) Dual SIM 128 GB azul estelar 4 GB RAM`)
                 if(opcionCelulares === "1)" || '1'){
                     alert (`El precio a pagar es $69999`)
                 }
                 else if(opcionCelulares === '1)' || '2'){
                     alert (`El precio a pagar es $89999`) 
                 }
                 else if(opcionCelulares === '3)' || '3'){
                     alert (`El precio a pagar es $100999`) 
                 }
                 else{
                     alert (`No se ha encontrado el ID del producto, recargue la página`) 
                 }
            break;
    }

}
main()