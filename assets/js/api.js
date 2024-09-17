async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/felipeshicasho/Felipe-Shicasho-Portifolio/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}

