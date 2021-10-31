import React, { useMemo } from 'react'
import { DataGrid as MuiDataGrid } from '@mui/x-data-grid'
import type { DataGridProps as MuiDataGridProps, GridLocaleText as MuiGridLocaleText } from '@mui/x-data-grid'
import { useIntl } from 'react-intl'

import { IntlTranslation } from 'app/intl'

export type DataGridProps = MuiDataGridProps

export const DataGrid: React.FC<DataGridProps> = (props) => {
  const { localeText, ...muiDataGridProps } = props

  const intl = useIntl()

  const muiGridLocaleText = useMemo<Partial<MuiGridLocaleText>>(() => {
    return {
      noRowsLabel: intl.formatMessage({ id: IntlTranslation.DataGridNoRowsLabel }),
      ...localeText,
    }
  }, [intl, localeText])

  return <MuiDataGrid autoHeight localeText={muiGridLocaleText} {...muiDataGridProps} />
}
