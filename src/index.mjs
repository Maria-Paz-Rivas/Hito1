class Activity {
    constructor (id, title, description, imgUrl) {
     this.id = id;
     this.title = title;
     this.description = description;
     this.imgUrl = imgUrl;
    }
 }
 
 
 class Repository {
    constructor () {
         this.activities = [];
         this.contador = 1;
     }
 
 
 
 
 getAllActivities () {
    return this.activities;
  }
 
 createActivity (title, description, imgUrl){
     const actividad = new Activity (this.contador, title, description, imgUrl);
     this.activities.push(actividad);
     this.contador++;
 
     return {
     message: "Actividad creada con éxito",
     actividad
   }
 }
 
  deleteActivity (id) {
      this.activities = this.activities.filter ((ele) => ele.id !== id);
      return this.activities;
    }
 }
 
 export {Activity, Repository}