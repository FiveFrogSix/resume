import axios from "@/plugins/axios/default"
import type { LineNotify } from "@/types/line"

const PostLineNotify = async (payload: LineNotify) => {
  const config = {
    url: "/notify.php",
    method: "POST",
    data: {
      message: payload.message
    }
  }
  return await axios(config)
    .then(async (res) => {
      return res
    })
    .catch((err) => {
      console.error(err)
      return err.response
    })
}

export { PostLineNotify }
