window.onload = function () {

    function getResultCountry(flag, country, region, count, lang, currency) {
        let parent = document.createElement("div")
        parent.classList.add("card")
        document.body.append(parent)
        let img = document.createElement("img")
        img.src = flag
        parent.append(img)
        let arr = [country, region, count, lang, currency]
        for (let i = 0; i < arr.length; i++) {
            let para = document.createElement("p")
            para.innerText = arr[i]
            parent.append(para)
        }
    }
    // +++++++++++++++++++++++++++
    async function getCountry(countryName) {
        try {
            const response = await fetch(`https://restcountries.com/v2/name/${countryName}`);
            const country = await response.json();
            console.log(country)
            console.log(typeof(country))
            getResultCountry(country[0].flag, country[0].name, country[0].region, country[0].population
                , country[0].languages[0].name, country[0].currencies[0].name)
            console.log(country[0].borders[1])
            // +++++++++++
            const x = await fetch(`https://restcountries.com/v2/alpha/${country[0].borders[1]}`)
            const y = await x.json()
            getResultCountry(y.flag, y.name, y.region, y.population
                , y.languages[0].name, y.currencies[0].name)
        }

        catch {
            throw new Error("check your code in get country pls .....")
        }
    }
    getCountry("egypt")
}