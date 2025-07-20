import fetch from 'node-fetch'

async function google_data() {
    try {
        const response = await fetch('https://www.google.com')
        const data = await response.text()
        console.log("Google data is fetching....")
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

google_data()
