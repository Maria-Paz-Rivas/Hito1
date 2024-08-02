import { Activity, Repository } from "../../src/index.mjs";

/*
- Repository debe ser una clase.
- Debería ser una instancia de la clase Repository.
- Debería tener un método llamado getAllActivities. 
- Debería tener un método llamado createActivity.
- Debería tener un método llamado deleteActivity.
- El método llamado createActivity debería poder agregar un elemento al array.
- El método deleteActivity debería poder eliminar un elemento del array por ID.
*/

describe("La clase Repository", () => {
    let repositorio;

    beforeEach ( () => {
        repositorio = new Repository();
    })
   
    it ("Repository debe ser una clase", () => {
        expect (typeof Repository.prototype.constructor).toBe("function")
    })

    it ("Debería ser una instancia de la clase Repository", () => {
        expect (repositorio instanceof Repository).toBe(true)
    })

    it ("Debería tener un método llamado getAllActivities", () => {
        expect (repositorio.getAllActivities).toBeDefined()
        expect (typeof repositorio.getAllActivities).toBe ("function")
    })

    it ("Debería tener un método llamado createActivity", () => {
        expect (repositorio.createActivity).toBeDefined()
        expect (typeof repositorio.createActivity).toBe ("function")
    })

    it ("Debería tener un método llamado deleteActivity", () => {
        expect (repositorio.deleteActivity).toBeDefined()
        expect (typeof repositorio.deleteActivity).toBe ("function")
    })

    it ("El método llamado createActivity debería poder agregar un elemento al array", () => {
       const expectActivity = new Activity (
        1,
        "nadar",
        "ejercitarse",
        "http:imagen"
       );

       repositorio.createActivity ("nadar", "ejercitarse", "http:imagen");

       expect(repositorio.getAllActivities()[0]).toEqual(expectActivity);
       expect(repositorio.getAllActivities()).toContain(expectActivity);
    })

    it ("El método deleteActivity debería poder eliminar un elemento del array por ID", () => {
        const expectActivity = new Activity (
            1,
            "nadar",
            "ejercitarse",
            "http:imagen"
        );

        repositorio.createActivity("nadar", "ejercitarse", "http:imagen");

        expect (repositorio.getAllActivities().length).toBe(1)
        expect(repositorio.getAllActivities()).toContain(expectActivity)
    
        repositorio.deleteActivity(1)

        expect(repositorio.getAllActivities ().length).toBe(0)
    
    })
});