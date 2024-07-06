import { sendToBackground } from "@plasmohq/messaging"

const province = "上海"
const city = "上海"

function IndexPopup() {
  return (
    <div>
      <button
        onClick={async () => {
          const resp = await sendToBackground({
            name: "weather",
            body: {
              province,
              city
            }
          })
          console.log("7878", resp)
        }}>
        获取天气信息
      </button>
    </div>
  )
}

export default IndexPopup
