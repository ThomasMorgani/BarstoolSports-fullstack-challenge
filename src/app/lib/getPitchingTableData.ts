export function getPitchingTableData(team: MlbTeam, pitchers: MlbPitcher[]) {
  type TableHead = {
    text: string
    title: string
    data_key: string
  }

  const tableTitle = `${team.last_name}`
  const tableHeaders: TableHead[] = [
    {
      text: 'PITCHERS',
      title: '',
      data_key: 'full_name', //placeholder, will be set below
    },
    {
      text: 'IP',
      title: 'Innings Pitched',
      data_key: 'innings_pitched',
    },
    {
      text: 'H',
      title: 'Hits Allowed',
      data_key: 'hits_allowed',
    },
    {
      text: 'R',
      title: 'Runs Allowed',
      data_key: 'runs_allowed',
    },
    {
      text: 'ER',
      title: 'Earned Runs',
      data_key: 'earned_runs',
    },
    {
      text: 'BB',
      title: 'Base on Balls (walks)',
      data_key: 'walks',
    },
    {
      text: 'K',
      title: 'Strike Outs',
      data_key: 'strike_outs',
    },
    {
      text: 'HR',
      title: 'Home Runs Allowed',
      data_key: 'home_runs_allowed',
    },
    {
      text: 'PC',
      title: 'Pitch Count',
      data_key: 'pitch_count',
    },
    {
      text: 'ST',
      title: 'Strikes Thrown',
      data_key: 'pitches_strikes',
    },
    {
      text: 'ERA',
      title: 'Earned Run Average',
      data_key: 'era',
    },
  ]

  //API does not provide pitching totals.
  //We will keep track of them here when iterating below
  const combineableStats = [...tableHeaders].slice(1, tableHeaders.length - 1).reduce((stats, header) => {
    const key = header.data_key
    stats[key] = 0
    return stats
  }, {})

  const tableRows: [] = []

  pitchers.forEach((pitcher: MlbPitcher) => {
    //create a player object to make formatting player column easier in table
    //use display name over first name as they are usually more recognizable to users
    const { display_name } = pitcher
    const [first, last] = display_name.split(' ')
    const playerAbv = `${first[0]}. ${last}`
    const player = { display_name, playerAbv }

    const stats: MlbPitchingTotals = {
      // era: 0,
      // innings_pitched: 0,
      // hits_allowed: 0,
      // runs_allowed: 0,
      // earned_runs: 0,
      // walks: 0,
      // strike_outs: 0,
      // home_runs_allowed: 0,
      // pitch_count: 0,
      // pitches_strikes: 0,
    }

    for (let stat in combineableStats) {
      if (pitcher[stat] !== undefined) {
        stats[stat] = +pitcher[stat]
        combineableStats[stat] += +pitcher[stat]
      }
    }

    const era = pitcher.era ?? 0
    tableRows.push([player, ...Object.values(stats), era])
  })

  const tableFooters = ['Team', ...Object.values(combineableStats)]

  return { tableTitle, tableHeaders, tableRows, tableFooters }
}
