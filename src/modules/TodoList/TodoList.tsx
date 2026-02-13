import { useSuspenseQuery } from "@tanstack/react-query";

export function TodoList() {
	const query = useSuspenseQuery({
		queryKey: ["todo", "list"],
		queryFn: async () => {
			return new Promise<string[]>((resolve) => {
				setTimeout(() => {
					resolve(["todo 1", "todo 2", "todo 3"]);
				}, 10);
			});
		},
	});

	return (
		<ul>
			{query.data.map((todo) => (
				<li key={todo}>{todo}</li>
			))}
		</ul>
	);
}
