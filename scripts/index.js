//PUNTO 1
class Activity {

   constructor (id, title, description, imgUrl) {
    this.id = id
    this.title = title
    this.description = description
    this.imgUrl = imgUrl
   }
}


class Repository {
   constructor () {
        this.activities = []
        this.contador = 1
    }




    getAllActivities () {
             return this.activities
      }

    createActivity (title, description, imgUrl){


          const actividad = new Activity (this.contador, title, description, imgUrl);
          this.activities.push(actividad)
          this.contador++

          return {
          message: "Actividad creada con éxito",
          actividad
    }
}

    deleteActivity (id) {
          this.activities = this.activities.filter ((ele) => ele.id !== id)
          return this.activities
   }
}


const repository = new Repository ();

const handleDelete = (event) => {
    const buttonId = event.target.id;
    repository.deleteActivity (Number (buttonId));
    insertActivities ();
};


  const buildActivity = (activity) => {

    const {id, title , description , imgUrl} = activity; 

    
    //PUNTO 3
    const cardContainer = document.createElement ("div");
    const titleEle = document.createElement ("h3");
    const descriptionEle = document.createElement ("p");
    const imgUrlEle = document.createElement ("img");

    
    //PUNTO 4
    titleEle.textContent = title;
    descriptionEle.textContent = description;
    imgUrlEle.src = imgUrl;
    imgUrlEle.alt = `imagen de ${title}`;

    
   
    cardContainer.classList.add ("card-container")
    titleEle.classList.add ("element-title");
    descriptionEle.classList.add ("element-description");
    imgUrlEle.classList.add ("element-image");


    //PUNTO 7
    cardContainer.appendChild (titleEle)
    cardContainer.appendChild (descriptionEle)
    cardContainer.appendChild (imgUrlEle)

    
    //BUTTON DELETE
    const buttonDelete = document.createElement ("button")
    buttonDelete.textContent = "X";
    buttonDelete.classList = "button-delete";
    buttonDelete.id = id;
    buttonDelete.addEventListener("click", handleDelete);
    cardContainer.appendChild (buttonDelete);

    return cardContainer;

  };
  

const insertActivities = () => {
 
    const cardsContainer = document.querySelector ("#cards-formcontainer")

    cardsContainer.innerHTML = "";

    const allActivities = repository.getAllActivities().map(buildActivity)

    allActivities.forEach((ele) => cardsContainer.appendChild (ele))

};

const handler = (event) => {
    event.preventDefault()


    const nameInput = document.getElementById("activity-name").value;
    const descriptionInput = document.getElementById("activity-description").value;
    const imgInput = document.getElementById("activity-image").value;

    
if (!nameInput || !descriptionInput || !imgInput) {
    return alert ("Todos los datos deben estar completos");
}


repository.createActivity(nameInput, descriptionInput, imgInput);
insertActivities()

document.getElementById("activity-name").value = "";
document.getElementById("activity-description").value = "";
document.getElementById("activity-image").value = "";


}

const buttonSubmit = document.getElementById ("button-submit"); 
buttonSubmit.addEventListener ("click", handler);

