type Props = {
  isHome: boolean
  tableTitle: string
  tableHeaders: (string | {})[]
  tableRows: (string | {})[]
  tableFooters: (string | {})[]
}

export default function StatTable({ isHome, tableTitle, tableHeaders, tableRows, tableFooters }: Props) {
  return (
    <table className='w-full   text-base'>
      <caption className={`text-left  font-bold text-${isHome ? 'home' : 'away'}-team`}>{tableTitle}</caption>
      <thead className=' h-[25px] text-xs overflow-hidden'>
        <tr className='font-bold '>
          {tableHeaders.map((th: any, idx: number) => (
            <th align={idx === 0 ? 'left' : 'center'} className='min-w-[20px]  w-auto  text-primary'>
              {th.text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableRows.map((row: any, idx: number) => {
          const { display_name, playerAbv, position } = row[0]
          return (
            <tr className={`h-[15px] ${idx % 2 === 0 && 'bg-slate-200'} hover:bg-yellow-100`}>
              <td align='left' className='align-middle whitespace-nowrap' title={display_name}>
                <span className='text-xs'>{playerAbv}</span>
                {position && <span className='text-2xs'> ({position})</span>}
              </td>
              {row.slice(1).map((td: string) => (
                <td align='center' className='h-1 align-middle text-2xs '>
                  {td}
                </td>
              ))}
            </tr>
          )
        })}
        <tr></tr>
      </tbody>
      <tfoot className='text-base '>
        <tr className='font-bold text-xs'>
          {tableFooters.map((td: any, idx: number) => (
            <td align={idx === 0 ? 'left' : 'center'}>{td}</td>
          ))}
        </tr>
      </tfoot>
    </table>
  )
}
