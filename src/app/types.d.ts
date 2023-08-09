type MlbBatter = {
  last_name: string
  first_name: string
  display_name: string
  position: string
  bat_order: number
  sub_bat_order: number
  sacrifices: number
  at_bats: number
  plate_appearances: number
  singles: number
  doubles: number
  triples: number
  home_runs: number
  sac_flies: number
  sac_hits: number
  stolen_bases: number
  caught_stealing: number
  rbi_with_two_outs: number
  total_bases: number
  runs: number
  hits: number
  rbi: number
  walks: number
  strike_outs: number
  left_on_base: number
  hit_by_pitch: number
  team_abbreviation: string
  ops: number
  avg: number
  obp: number
  slg: number
  at_bats_per_home_run: number
  at_bats_per_rbi: number
  walk_rate: number
  plate_appearances_per_rbi: number
  plate_appearances_per_home_run: number
  extra_base_hits: number
  stolen_base_average: number
  strikeout_rate: number
  ops_string: string
  slg_string: string
  obp_string: string
  avg_string: string
  batting_highlights: string
  [k: string]: unknown
}

type MlbBattingTotals = {
  sacrifices: number
  at_bats: number
  plate_appearances: number
  singles: number
  doubles: number
  triples: number
  home_runs: number
  sac_flies: number
  sac_hits: number
  stolen_bases: number
  caught_stealing: number
  rbi_with_two_outs: number
  total_bases: number
  runs: number
  hits: number
  rbi: number
  walks: number
  strike_outs: number
  left_on_base: number
  hit_by_pitch: number
  ops: number
  avg: number
  obp: number
  slg: number
  at_bats_per_home_run: number
  at_bats_per_rbi: number
  walk_rate: number
  plate_appearances_per_rbi: number
  plate_appearances_per_home_run: number
  extra_base_hits: number
  stolen_base_average: number
  strikeout_rate: number
  ops_string: string
  slg_string: string
  obp_string: string
  avg_string: string
  batting_highlights: string
  [k: string]: unknown
}

type MlbPitcher = {
  last_name: string
  first_name: string
  display_name: string
  pitch_order: number
  win: boolean
  loss: boolean
  save: boolean
  hold: boolean
  era: number
  whip: number
  innings_pitched: number
  hits_allowed: number
  runs_allowed: number
  earned_runs: number
  walks: number
  intentional_walks: number
  strike_outs: number
  home_runs_allowed: number
  pitch_count: number
  pitches_strikes: number
  wild_pitches: number
  hit_by_pitch: number
  errors: number
  team_abbreviation: string
  [k: string]: unknown
}

type MlbPitchingTotals = {
  era: number
  innings_pitched: number
  hits_allowed: number
  runs_allowed: number
  earned_runs: number
  walks: number
  strike_outs: number
  home_runs_allowed: number
  pitch_count: number
  pitches_strikes: number
  [k: string]: string | number | undefined
}

type MlbTeam = {
  team_id: string
  abbreviation: string
  active: boolean
  first_name: string
  last_name: string
  conference: string
  division: string
  site_name: string
  city: string
  state: string
  full_name: string
  [k: string]: unknown
}

type MlbGameData = {
  league: string
  away_team: MlbTeam
  home_team: MlbTeam
  away_period_scores: number[]
  home_period_scores: number[]
  away_errors: number
  home_errors: number
  away_batters: MlbBatter[]
  home_batters: MlbBatter[]
  away_pitchers: {
    last_name: string
    first_name: string
    display_name: string
    pitch_order: number
    win: boolean
    loss: boolean
    save: boolean
    hold: boolean
    era: number
    whip: number
    innings_pitched: number
    hits_allowed: number
    runs_allowed: number
    earned_runs: number
    walks: number
    intentional_walks: number
    strike_outs: number
    home_runs_allowed: number
    pitch_count: number
    pitches_strikes: number
    wild_pitches: number
    hit_by_pitch: number
    errors: number
    team_abbreviation: string
    [k: string]: unknown
  }[]
  home_pitchers: {
    last_name: string
    first_name: string
    display_name: string
    pitch_order: number
    win: boolean
    loss: boolean
    save: boolean
    hold: boolean
    era: number
    whip: number
    innings_pitched: number
    hits_allowed: number
    runs_allowed: number
    earned_runs: number
    walks: number
    intentional_walks: number
    strike_outs: number
    home_runs_allowed: number
    pitch_count: number
    pitches_strikes: number
    wild_pitches: number
    hit_by_pitch: number
    errors: number
    team_abbreviation: string
    [k: string]: unknown
  }[]
  away_fielding: {
    last_name: string
    first_name: string
    display_name: string
    errors: number
    team_abbreviation: string
    [k: string]: unknown
  }[]
  home_fielding: {
    last_name: string
    first_name: string
    display_name: string
    errors: number
    team_abbreviation: string
    [k: string]: unknown
  }[]
  officials: {
    position: string
    first_name: string
    last_name: string
    [k: string]: unknown
  }[]
  event_information: {
    temperature: number
    site: {
      capacity: number
      surface: string
      name: string
      state: string
      city: string
      [k: string]: unknown
    }
    attendance: number
    duration: string
    status: string
    season_type: string
    start_date_time: string
    [k: string]: unknown
  }
  away_batter_totals: MlbBattingTotals
  home_batter_totals: MlbBattingTotals
}
