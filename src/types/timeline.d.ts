declare interface TimelineObject {
  offset?: boolean
  start_date: string
  end_date: any
  sub_date_text: string
  title: string
  sub_title: string
  detail: TimelineDetail
  end_date_type: string
}

interface TimelineDetail {
  title: string
  list: {
    title: string
    list: string[]
  }[]
}

export type { TimelineObject }
