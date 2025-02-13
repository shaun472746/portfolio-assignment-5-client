import path from "path";
import dotenv from "dotenv";


dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
    port: process.env.PORT,
    api_url: process.env.NEXT_PUBLIC_API_URL,
    client_url: process.env.NEXT_PUBLIC_CLIENT_URL,
  }