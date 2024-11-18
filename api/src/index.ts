import app from "./app";
import mongoose from "mongoose";


async function main() {
    try {
        await mongoose.connect(
            "mongodb://localhost:27017"
        );
        console.log("Aplicación conectada a la base de datos");
        app.listen(4000, () => {
            console.log("Aplicacion corriendo con exito")
        })
    } catch (error) {
        console.log("Algo salio mal con la base de datos")
    }
}
main();