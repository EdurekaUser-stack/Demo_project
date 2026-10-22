
import app from "./app.js";
import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";

async function start() {
  try {
    await connectDB();

    app.listen(env.port, () => {
      const { nodeEnv, port } = env;
      console.log(`Server running in ${nodeEnv} mode on port ${port}`);
    });
  } catch (error) {
    console.error("[db] Failed to connect:", error.message);

    // Display individual MongoDB Atlas connection errors
    if (error.reason?.servers) {
      for (const [address, server] of error.reason.servers) {
        console.error("----------------------------");
        console.error("Server:", address);
        console.error("State:", server.type);
        console.error("Cause:", server.error);
      }
    }

    process.exit(1);
  }
}

start();
