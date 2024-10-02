console.log('Hello world !!!')

const apiRoute = `../api/data.json`;

const grabApi = async () => {
    console.log('checking data')
    const res = await fetch(apiRoute);
    const data = await res.json();

    console.log('Response', res)

    try {
        const response = await fetch(url);
            if(!response.ok){
                throw new Error(`Response status: ${response.status}`);
            }
        const json = await response.json();
        console.log(json)
    }catch(error){
        console.log('error')
    }
}

grabApi()