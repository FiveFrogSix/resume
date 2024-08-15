declare module "@/mockup/data" {
  interface TimelineObject {
    offset: boolean
    start_date: string
    end_date: any
    sub_date_text: string
    title: string
    sub_title: string
    detail: object
  }
  class TimelineExp {
    TimelineObject
  }
  class TimelineEducate {
    TimelineObject
  }

  export { TimelineExp, TimelineEducate }
}
