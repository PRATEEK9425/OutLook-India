let escarr = [
    {
        "image": "https://esg.outlookindia.com/wp-content/uploads/2022/08/04.jpg",
        "title": "INDRANIL ROY",
        "description": "CEO, Outlook",
    },
    {
        "image": "https://esg.outlookindia.com/wp-content/uploads/2022/08/ir-2.jpg",
        "title": "SUCHETANA RAY",
        "description": "Editor, Outlook Business",
    },
    {
        "image": "https://esg.outlookindia.com/wp-content/uploads/2022/08/03.jpg",
        "title": "SHRUTIKA DEWAN",
        "description": "Director, Brand & Marketing, Outlook.",
    },
    {
        "image": "https://esg.outlookindia.com/wp-content/uploads/2022/08/04.jpg",
        "title": "RAJIV TIKOO",
        "description": "Consulting Editor (Sustainability), Outlook Business",
    },
    {
        "image": "https://esg.outlookindia.com/wp-content/uploads/2022/08/02.jpg",
        "title": "RITU JHA",
        "description": "Principal Correspondent, Outlook Business",
    },
    {
        "image": "https://esg.outlookindia.com/wp-content/uploads/2022/08/06.jpg",
        "title": "NAINA GAUTAM ",
        "description": "Senior Assistant Editor, Outlook Business",
    },
    {
        "image": "https://esg.outlookindia.com/wp-content/uploads/2022/08/05.jpg",
        "title": "MADHUCHHANDA BOSE",
        "description": "AVP Marketing",
        "date": "23 August 2022"
    },

]
let append = () => {
    escarr.forEach((el) => {
        let econt1 = document.getElementById("esj_container")
        let image = document.createElement("img")
        image.setAttribute("id", "esjimage")
        image.src = el.image

        let title = document.createElement("p")
        title.innerText = el.title
        title.setAttribute("class", "esjtitle")
        let description = document.createElement("p")
        description.innerText = el.description
        description.setAttribute("class", "esjdescription");

        let div = document.createElement("div")
        div.setAttribute("class", "esjdiv")
        div.append(image, title, description)
        econt1.append(div)
    })
}

append()
