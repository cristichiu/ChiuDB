import react from "react"

interface IDataBaseElement {
    name: string,
    creatingAt: number,
    password: string,
    token: string,
    user: string
}


function AllDataBase({dataBase}: any) {
    console.log(dataBase)
    return (
        <div>
            <div className="title">Acestea sunt bazele tale de date</div>
            { dataBase.forEach((element: IDataBaseElement) => {
                return (
                    <div>
                        <div>{element?.name}</div>
                        <button>Edit</button>
                    </div>
                )
            }) }
        </div>
    )
}

export default AllDataBase