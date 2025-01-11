import { useParams } from "react-router-dom"

const User = () => {
    const userid = useParams()

  return (
    <div className="bg-green-700 text-white text-xl p-4">
      User: {userid}
    </div>
  )
}

export default User
