//Ejercicio
/**
 * 1. Crear un método que muestre en consola el valor de this.data
 * 2. Creat un método que agregue un valor nuevo al inicio del arreglo.
 * 3. Crear un método que agrege un valor nuevo al final del arreglo.
 * 4. Validar que el valor no exista en el arreglo antes de agregarlo.
 * Si el valor existe, se deberá retornar un string que diga "El valor ya existe"
 * En el resto de los escenarios, se deber retornar this.data
 */
 var arrOfValues = [23, 32, 45, 4, 15, 60];
 class StateFlow{
    letructor(initialValue) {
        this.data = initialValue
    }
  
  	render(){
        return this.data;
    }
  
		addAtLast(value){
      let from = "addAtLast";
      return this.checkValue({ value, from });
    }  
  
  	addAtTop(value){
      let from = "addAtTop";
     	return this.checkValue({ value, from });
    }
  
  	checkValue({ value, from }){
      let isValue = this.data.includes(value);
      if( isValue){
        return "El valor existe";
      }else if( !isValue && from === "addAtTop"){
        this.data = [value, ...this.data];
        return this.data;
      }else if( !isValue && from === "addAtLast"){
        this.data = [...this.data, value];
        return this.data;
      } 	
}
// Var
let state = new StateFlow(arrOfValues);
state.render()
state.render()
state.addAtLast(5)
state.addAtLast(12)
state.addAtTop(54)
state.addAtTop(45)
state.render();