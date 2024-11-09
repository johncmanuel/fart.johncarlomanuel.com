// @ts-nocheck: No need to check types for imports from links.

import { useFetchJson } from "./components/useFetchJson";

const App = () => {
	const links =
		"https://raw.githubusercontent.com/johncmanuel/johncarlomanuel.com/refs/heads/master/src/lib/public/links/links.json";
	const fartcss = "https://css.fart.tools/";
	const ogWebsite = "https://johncarlomanuel.com/";
	const sourceCode = "https://github.com/johncmanuel/fart.johncarlomanuel.com";

	const { data, loading, error } = useFetchJson(links);

	let github = data?.github;
	let x = data?.x;
	let linkedin = data?.linkedin;
	let email = data?.email;
	let resume = data?.resume;
	let dm = data?.dm;
	let id = data?.id;

	return (
		<main>
			<div className="fart-section">
				<h1>
					John Carlo Manuel <span className="fart-logo">🧪</span>
				</h1>
				<p className="fart-sparkle">
					Software Engineer and Computer Science major at CSUF!
				</p>
				<p>
					For fast responses, reach out{" "}
					<a href={`mailto:${email}`} target="_blank">
						via email
					</a>{" "}
					or{" "}
					<a href={dm} target="_blank">
						DM via X
					</a>
					.
				</p>
				{loading && <div>Loading...</div>}
				{error && <div>{error}</div>}
				{data && (
					<>
						<a href={github} className="fart-button" target="_blank">
							GitHub<small>↗</small>
						</a>
						<a href={x} className="fart-button" target="_blank">
							X/Twitter<small>↗</small>
						</a>
						<a href={linkedin} className="fart-button" target="_blank">
							LinkedIn<small>↗</small>
						</a>
						<a href={`mailto:${email}`} className="fart-button" target="_blank">
							Email<small>↗</small>
						</a>
					</>
				)}
				<h2>Resume</h2>
				<p>Everything is there!</p>
				<a href={resume} className="fart-button" target="_blank">
					View here!<small>↗</small>
				</a>
			</div>
			<hr />
			<footer>
				<p>
					&copy; {new Date().getFullYear()} John Carlo Manuel. All rights
					reserved.
				</p>
				<p>
					Designed with <a href={fartcss}>fart.css</a>. Check out{" "}
					<a href={ogWebsite} target="_blank">
						johncarlomanuel.com
					</a>
					.{" "}
				</p>
				<p>
					<a href={sourceCode} target="_blank">
						Source code
					</a>
					.
				</p>
			</footer>
		</main>
	);
};

export default App;
