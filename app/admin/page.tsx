import { Card, Grid, Metric, Text, Title } from '@tremor/react'
import { sql } from 'drizzle-orm'
import React from 'react'

import { db } from '~/db'

export default async function AdminPage() {
  const {
    rows: [count],
  } = await db.execute<{ today_count: number }>(
    sql`SELECT 
  (SELECT COUNT(*) FROM comments) as comments`
  )

  return (
    <>
      <Title>后台仪表盘</Title>

      <Grid numItemsMd={2} numItemsLg={3} className="mt-6 gap-6">
        <Card>
          <Text>总评论</Text>

          {count && 'comments' in count && <Metric>{count.comments}</Metric>}
        </Card>
      </Grid>
    </>
  )
}
