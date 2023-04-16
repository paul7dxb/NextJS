import {useRouter} from "next/router"

const ClientsProjectsPage = () => {
    const router = useRouter()
    const clientID = router.query.clientid
    console.log(clientID)

    const loadProjectHandler = () => {
        // Function work e.g loading data

        // Navigate to different page
        // router.replace('clients/max/projectA') // Replace would prevent navigating back from next page
        // router.push('/clients/max/projectA')
        router.push({pathname: '/clients/[clientid]/[clientprojectid]', query: {clientid: clientID, clientprojectid: "Project A" } })
    }

    return (
        <div>
            <h1>The Projects from a Given Client</h1>
            <button onClick={loadProjectHandler}>Programatic Navigation to Project A</button>
        </div>
    )
}

export default ClientsProjectsPage