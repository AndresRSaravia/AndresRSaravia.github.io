async function getJSON(file) {
	try {
		const jsonRes = await fetch(`../json-custom/${file}`)
		const result = await jsonRes.json()
		return result
	} catch (error) {
		console.error(error)
	}
}

async function renderPublications() {
	let publicationsContainer = document.getElementById("publications")
	let publications = await getJSON("publications.json")
	publications.forEach(publication => {
		const card = document.createElement("div")
		card.innerHTML = `<ul>
							<li>(${publication.year}) <em>${publication.title}</em>.
							${publication.link ? `<a href="${publication.link}">[link]</a>` : ""}
							${publication.mirror ? `<a href="${publication.mirror}">[mirror]</a>` : ""}
							${publication.talk ? `<a href="${publication.talk}">[talk]</a>` : ""}
							${publication.talkEN ? `<a href="${publication.talkEN}">[talk english]</a>` : ""}
							${publication.poster ? `<a href="${publication.poster}">[poster]</a>` : ""}</li>
							<ul>
								<li>${publication.place}.</li>
								<li>Authors: ${publication.authors.join(", ").replace("Andrés R. Saravia", "<b>Andrés R. Saravia</b>")}</li>
							</ul>
						</ul>`
		publicationsContainer.appendChild(card)
	})
}

async function renderTalks() {
	let talksContainer = document.getElementById("talks")
	let talks = await getJSON("talks.json")
	talks.forEach(talk => {
		const card = document.createElement("div")
		card.innerHTML = `<ul>
							<li>[${talk.language}] (${talk.year}) <em>${talk.title}</em>.
							${talk.link ? `<a href="${talk.link}">[link]</a>` : ""}
							${talk.talk ? `<a href="${talk.talk}">[talk]</a>` : ""}
							${talk.poster ? `<a href="${talk.poster}">[poster]</a>` : ""}
							${talk.detail ? `<a href="${talk.detail}">[detail]</a>` : ""}
							<ul>
								<li>${talk.place}.</li>
							</ul>
						</ul>`
		talksContainer.appendChild(card)
	})
}

async function renderActivityHistory() {
	let activityHistoryContainer = document.getElementById("activity-history")
	let activityHistory = await getJSON("activity-history.json")
	activityHistory.forEach(activity => {
		const card = document.createElement("div")
		card.innerHTML = `<ul>
							<li>[${activity.language}] (${activity.years}) ${activity.activity}.
						</ul>`
		activityHistoryContainer.appendChild(card)
	})
}


renderPublications()
renderTalks()
renderActivityHistory()
