import { createClient } from "redis";
const client = createClient();

async function processSubmission(submission) {
  const { problemId, code, language } = JSON.parse(submission);

  console.log("problem submitted " + 200);
  // Here you would add your actual processing logic

  // Simulate processing delay
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Finished processing submission for problemId ${problemId}.`);
}

async function startWorker() {
  try {
    await client.connect();

    // Main loop
    while (true) {
      try {
        const submission = await client.brPop("problems", 0);
        // @ts-ignore
        await processSubmission(submission.element);
      } catch (error) {
        console.error("Error processing submission:", error);
        // Implement your error handling logic here. For example, you might want to push
        // the submission back onto the queue or log the error to a file.
      }
    }
  } catch (error) {
    console.error("Failed to connect to Redis", error);
  }
}

startWorker();
