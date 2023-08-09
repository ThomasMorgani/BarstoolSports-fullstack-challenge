export function getBattingTableData(team: MlbTeam, batters: MlbBatter[], totals: MlbBattingTotals) {
  type TableHead = {
    text: string
    title: string
    data_key: string
  }

  const tableTitle = `${team.last_name}`
  const tableHeaders: TableHead[] = [
    {
      text: 'HITTERS',
      title: '',
      data_key: 'full_name', //placeholder, will be set below
    },
    {
      text: 'AB',
      title: 'At bats',
      data_key: 'at_bats',
    },
    {
      text: 'R',
      title: 'Runs',
      data_key: 'runs',
    },
    {
      text: 'H',
      title: 'Hits',
      data_key: 'hits',
    },
    {
      text: 'RBI',
      title: 'Runs batted in',
      data_key: 'rbi',
    },
    {
      text: 'HR',
      title: 'Home run',
      data_key: 'home_runs',
    },
    {
      text: 'BB',
      title: 'Base on balls',
      data_key: 'walks',
    },
    {
      text: 'K',
      title: 'Strike outs',
      data_key: 'strike_outs',
    },
    {
      text: 'AVG',
      title: 'Batting average',
      data_key: 'avg_string',
    },
    {
      text: 'OBP',
      title: 'On-base percentage',
      data_key: 'obp_string',
    },
    {
      text: 'SLG',
      title: 'Slugging percentage',
      data_key: 'slg_string',
    },
  ]

  const tableRows = batters.map(batter => {
    //create a player object to make formatting player column easier in table
    //use display name over first name as they are usually more recognizable to fans
    const { display_name, position } = batter
    const [first, last] = display_name.split(' ')
    const playerAbv = `${first[0]}. ${last}`
    const player = { display_name, playerAbv, position }
    return [player, ...tableHeaders.slice(1).map(header => batter[header.data_key])]
  })
  const tableFooters = ['Team', ...tableHeaders.slice(1).map(header => totals[header.data_key])]
  return { tableTitle, tableHeaders, tableRows, tableFooters }
}
