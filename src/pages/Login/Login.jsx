
export const Login = () => {

    let alumnos = [
        {
            id: 1,
            nombre: "Toni",
            edad: 37,
            hobbies: {
                hobbie1: "viciar",
                hobbie2: "ciberseguridad"
            }
        },
        {
            id: 2,
            nombre: "Vincenzo",
            edad: 28,
            hobbies: {
                hobbie1: "comer",
                hobbie2: "estudiar"
            }
        },
        {
            id: 3,
            nombre: "David",
            edad: 37,
            hobbies: {
                hobbie1: "musica",
                hobbie2: "boxeo"
            }
        },

    ]

    const elegido = (peine) => {
        console.log(peine)
    }

    return (
        <>
            {
                alumnos.map(
                    (alumno, i) => {
                        return (
                            <div key={alumno.id} onClick={()=>elegido(alumno)}>
                                {alumno.nombre}
                            </div>
                        )
                    }
                )
            }
        </>
    )
}