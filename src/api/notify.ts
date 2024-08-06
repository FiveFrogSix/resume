import axios from "@/plugins/axios/default"
import type { LineNotify } from "@/types/line"

const PostLineNotify = async (payload: LineNotify) => {
  const config = {
    url: "/notify.php",
    method: "POST",
    data: payload
  }
  return await axios(config)
    .then(async (res) => {
      return res.data
    })
    .catch((err) => {
      console.error(err)
      return err.response.data
    })
}

export { PostLineNotify }
