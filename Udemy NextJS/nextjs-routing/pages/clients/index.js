import Link from "next/link";

const ClientsPage = () => {
	const clients = [
		{ id: "paul", name: "Paul" },
		{ id: "max", name: "Max" },
	];
	return (
		<div>
			<h1>The Clients Page</h1>
			<ul>
				<li>
					{clients.map((client) => (
						<li id={client.id}>
                            {/* Access by literal */}
							{/* <Link href={`/clients/${client.id}`}>  */}
							<Link
                            // Access by object
								href={{
									pathname: "/clients/[id]",
									query: { id: client.id },
								}}
							>
								{client.name}
							</Link>
						</li>
					))}
				</li>
			</ul>
		</div>
	);
};

export default ClientsPage;
