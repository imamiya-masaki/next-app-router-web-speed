const baseURL = 'https://webspeed.anpan-playground.com'

const wraperApiClient = {
  get: async <T>(url: string, query?: Record<string, unknown>):Promise<{data: T}>=> {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query ?? {})) {
      if (value) {
        searchParams.set(key, `${value}`)
      }
    }
    let targetURL:string = url
    if (searchParams.toString()) {
      targetURL = targetURL + '?' + searchParams.toString()
    }
    const urlL = (baseURL ?? '') + targetURL
    const fetched = await fetch(urlL, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // @ts-ignore
    .catch((e:any) => {
      console.log('e', e)
    })
    let data;
    try {
    data = await fetched?.json()
    //@ts-ignore
    console.log('zot確認:client', data?.error, urlL, query )
    } catch (e) {
      // const fetch = await fetched.text()
      console.error('error', e, urlL)
    }
    if (!data) {
      data = {}
    }
    return { data: data as any}
  }
}

export const apiClient = wraperApiClient;
