type Props = {
  gameData: MlbGameData
}

type Map = {
  [key: string]: string | undefined
}

export default function Boxscore({ gameData }: Props) {
  const gameStateMap: Map = {
    completed: 'Final',
  }

  return (
    <article className='flex flex-auto  w-full h-32 text-white rounded overflow-hidden'>
      <div className='flex flex-col items-center  justify-center bg-away-team   w-full '>
        <h2 className='text-4xl text-bold text-center'> {gameData.away_team.last_name.toUpperCase()}</h2>
        <h6 className='mt-1 text-sm'>10-10</h6>
      </div>
      <div className='flex flex-col items-center  justify-center w-80  bg-slate-400'>
        <p className='flex text-3xl mt-1 font-bold whitespace-nowrap'>
          {/* &#x25B6;  */}
          <span className={`${gameData.away_batter_totals.runs > gameData.home_batter_totals.runs && 'text-accent'}`}> {gameData.away_batter_totals.runs}</span>

          <span className='mx-2'>-</span>
          <span className={`${gameData.home_batter_totals.runs > gameData.away_batter_totals.runs && 'text-accent'}`}>{gameData.home_batter_totals.runs}</span>
        </p>
        <p>{gameStateMap[gameData?.event_information?.status] ?? ''}</p>
      </div>
      <div className='flex flex-col items-center  justify-center bg-blue-900  w-full '>
        <h2 className='text-center text-4xl text-bold '>{gameData.home_team.last_name.toUpperCase()}</h2>
        <h6 className='mt-1 text-sm'>10-10</h6>
      </div>
    </article>
  )
}
