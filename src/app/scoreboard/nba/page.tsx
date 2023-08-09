import React from 'react'
import Boxscore from '../components/boxscore/boxscore'
import Card from '@/app/components/card/card'
import ScoreTable from '../components/score-table/score-table'
import StatTable from '../components/stat-table/stat-table'
import { fetchData } from '@/app/lib/fetchData'
import { getBattingTableData } from '@/app/lib/getBattingTableData'
import { getPitchingTableData } from '@/app/lib/getPitchingTableData'
export default async function Nba() {
  const gameId = 'eed38457-db28-4658-ae4f-4d4d38e9e212' //provided by instructions
  const gameData = await fetchData(gameId)

  const awayBattingTableData = getBattingTableData(gameData.away_team, gameData.away_batters, gameData.away_batter_totals)
  const homeBattingTableData = getBattingTableData(gameData.home_team, gameData.home_batters, gameData.home_batter_totals)

  const awayPitchingTableData = getPitchingTableData(gameData.away_team, gameData.away_pitchers)
  const homePitchingTableData = getPitchingTableData(gameData.home_team, gameData.home_pitchers)

  //TODO: handle gameData failure
  //may need to move up to parent
  // console.log(awayBattingTableData)
  return (
    <section className='w-full p-2'>
      <h1 className='text-4xl my-4'>NBA BOXSCORE</h1>
      <article className='mb-2'>
        <Boxscore gameData={gameData} />
      </article>
      <Card classes='mb-2'>
        <ScoreTable gameData={gameData} />
      </Card>
      {/* HItting tables */}
      {/* <em>{JSON.stringify(awayBattingTableData)}</em> */}
      <Card classes='mb-2' title='Hitting'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <StatTable {...awayBattingTableData}> </StatTable>
          <StatTable isHome={true} {...homeBattingTableData} />
        </div>
      </Card>
      <Card classes='mb-2' title='Pitching'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <StatTable {...awayPitchingTableData}> </StatTable>
          <StatTable isHome={true} {...homePitchingTableData} />
        </div>
      </Card>

      {/* Pitching tables */}
    </section>
  )
}
