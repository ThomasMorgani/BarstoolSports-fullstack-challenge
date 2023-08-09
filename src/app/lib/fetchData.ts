export async function fetchData(gameId: string): Promise<void> {
    const URL = `https://chumley.barstoolsports.com/dev/data/games/${gameId}.json`
    try {
      const response = await fetch(URL)
      return await response.json()
    } catch (error) {
      let message = ''
      if (typeof error === 'string') {
        message = error
      }
      if (error instanceof Error) {
        message = error.message || 'error encountered'
      }
      console.log(message)
    } finally {
      console.log('finally: fetching data complete ')
    }
  }