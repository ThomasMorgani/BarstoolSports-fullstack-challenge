type Props = {
  gameData: MlbGameData
}
export default function ScoreTable({ gameData }: Props) {
  return (
    <table className='w-full'>
      <thead>
        <tr className='font-bold text-lg text-primary'>
          <th className='p-2 max-w-[20px] '></th>
          {gameData.away_period_scores.map((s, i) => (
            <th className='p-2 '>{i + 1}</th>
          ))}
          <th className='p-2'>R</th>
          <th className='p-2 '>H</th>
          <th className='p-2 '>E</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align='left' className='p-2   text-away-team font-bold  '>
            {gameData.away_team.abbreviation}
          </td>
          {gameData.away_period_scores.map(s => (
            <td align='center' className='p-2 text-xs border'>
              {s ?? '-'}
            </td>
          ))}
          <td align='center' className='p-2 text-xs border'>
            {gameData?.away_batter_totals?.runs ?? '-'}
          </td>
          <td align='center' className='p-2 text-xs border'>
            {gameData?.away_batter_totals?.hits ?? '-'}
          </td>
          <td align='center' className='p-2 text-xs border'>
            {gameData?.away_errors ?? '-'}
          </td>
        </tr>
        <tr>
          <td align='left' className='p-2 text-home-team font-bold shadow drop-shadow'>
            {gameData.home_team.abbreviation}
          </td>
          {gameData.home_period_scores.map(s => (
            <td align='center' className='p-2 border text-xs'>
              {s}
            </td>
          ))}
          <td align='center' className='p-2 border text-xs'>
            {gameData?.home_batter_totals?.runs ?? '-'}
          </td>
          <td align='center' className='p-2 border text-xs'>
            {gameData?.home_batter_totals?.hits ?? '-'}
          </td>
          <td align='center' className='p-2 border text-xs'>
            {gameData?.home_errors ?? '-'}
          </td>
        </tr>
      </tbody>
    </table>
  )
}
